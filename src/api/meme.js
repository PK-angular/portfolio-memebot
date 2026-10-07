// In-memory store (OK for portfolio; resets on cold start)
const rateMap = new Map();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const DAILY_LIMIT = 20;

// helper
const getClientIp = (req) => {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "unknown"
  );
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const ip = getClientIp(req);
  const now = Date.now();

  // --- RATE LIMIT (per minute) ---
  if (!rateMap.has(ip)) {
    rateMap.set(ip, {
      count: 1,
      start: now,
      daily: 1,
      day: new Date().toDateString(),
    });
  } else {
    const data = rateMap.get(ip);

    // reset minute window
    if (now - data.start > RATE_LIMIT_WINDOW) {
      data.count = 1;
      data.start = now;
    } else {
      data.count++;
    }

    // block if exceeded
    if (data.count > MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({
        reply: "Too many requests 😵‍💫 Slow down.",
      });
    }

    // reset daily
    const today = new Date().toDateString();
    if (data.day !== today) {
      data.daily = 0;
      data.day = today;
    }

    data.daily++;

    if (data.daily > DAILY_LIMIT) {
      return res.status(429).json({
        reply: "Daily meme quota finished 😴 Come back tomorrow.",
      });
    }

    rateMap.set(ip, data);
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        max_output_tokens: 50,
        input: `
You are MemeBot.

Rules:
- 1–2 lines only
- Use meme formats (POV, When you, Me trying to)
- Add emojis

User: ${message}
        `,
      }),
    });

    const data = await response.json();

    res.status(200).json({
      reply: data.output?.[0]?.content?.[0]?.text || "Meme failed 💀",
    });
  } catch (err) {
    res.status(500).json({
      reply: "Server said nope 😭",
    });
  }
}
