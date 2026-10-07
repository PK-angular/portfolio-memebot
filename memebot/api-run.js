import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// 🔥 Strict Rate Limiter (Protects OpenAI credits on AWS)
const memeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  message: {
    reply: "Easy there 😭 You're sending memes faster than I can think.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// 🔥 OpenAI Client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🔥 Meme Handler Function
const handleMemeRequest = async (req, res) => {
  try {
    const { message } = req.body;

    console.log("Incoming request message:", message);

    // 🔥 Input validation
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        reply: "MemeBot received emotional damage from invalid input 💀",
      });
    }

    // 🔥 Length protection
    if (message.length > 200) {
      return res.json({
        reply: "That message was longer than my attention span 😭",
      });
    }

    // 🔥 OpenAI Request (Standard Chat Completions API)
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo"
      max_tokens: 120,
      messages: [
        {
          role: "system",
          content: `You are MemeBot.
Your personality: chronically online, self-aware, sarcastic, Gen Z internet humour, roasts lightly but never offensive, sounds like Twitter/Instagram comments, dramatic for no reason.
Rules: MAX 1-2 lines. NEVER explain jokes. NEVER say "here is your joke". Use: POV:, Bro:, Me trying to:, Corporate needs you to find the difference:, Nobody:. Use emojis. Keep responses short and punchy.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const aiReply = completion.choices[0]?.message?.content?.trim();
    const finalReply =
      aiReply || `POV: you said "${message}" and expected seriousness 💀`;

    res.json({ reply: finalReply });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({
      reply: "MemeBot crashed while generating humour 😭",
    });
  }
};

// 🔥 Register route for both direct local dev and proxied /api/meme
app.post("/meme", memeLimiter, handleMemeRequest);
app.post("/api/meme", memeLimiter, handleMemeRequest);

// 🔥 Health check route
app.get("/", (req, res) => {
  res.json({ status: "MemeBot API running 🚀" });
});

// 🔥 Start server on PORT (Default: 5000 for EC2 / production)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`MemeBot Server running on http://localhost:${PORT}`);
});
