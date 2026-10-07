import { useState } from "react";

const About = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const DAILY_LIMIT = 5;

  const getTodayKey = () => {
    const today = new Date().toISOString().split("T")[0];
    return `meme_count_${today}`;
  };

  const askMemeBot = async () => {
    const trimmed = input.trim();

    // 🔥 Empty input
    if (!trimmed) return;

    // 🔥 Daily limit
    const key = getTodayKey();
    const count = Number(localStorage.getItem(key) || 0);

    // if (count >= DAILY_LIMIT) {
    //   setReply("MemeBot unionized 😴 Come back tomorrow.");
    //   return;
    // }

    // 🔥 Long message protection
    if (trimmed.length > 200) {
      setReply("Bro submitted a Netflix script instead of a meme request 🎬💀");
      return;
    }

    // 🔥 Code detection
    const suspiciousPatterns = [
      "function",
      "class",
      "import ",
      "export ",
      "console.log",
      "{",
      "}",
      "</",
      "/>",
      "SELECT *",
      "DROP TABLE",
      "npm ",
      "yarn ",
    ];

    const containsCode = suspiciousPatterns.some((pattern) =>
      trimmed.toLowerCase().includes(pattern.toLowerCase()),
    );

    if (containsCode) {
      setReply(
        "POV: developer tries debugging through MemeBot instead of StackOverflow 💀",
      );
      return;
    }

    // 🔥 URL detection
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if (urlRegex.test(trimmed)) {
      setReply("MemeBot saw a suspicious link and chose self-preservation 🫡");
      return;
    }

    // 🔥 Repeated spam detection
    const lastMessage = localStorage.getItem("last_meme_message");

    if (lastMessage && lastMessage.toLowerCase() === trimmed.toLowerCase()) {
      setReply("Same message again? Character development arc missing 📉");
      return;
    }

    // 🔥 Gibberish detection
    const weirdTextRegex = /(.)\1{7,}/;

    if (weirdTextRegex.test(trimmed)) {
      setReply("MemeBot respectfully declines keyboard smash language 😭");
      return;
    }

    // 🔥 Cooldown protection
    const lastRequestTime = Number(
      localStorage.getItem("last_meme_request_time") || 0,
    );

    const now = Date.now();

    if (now - lastRequestTime < 5000) {
      setReply("Too fast 😵 MemeBot needs emotional recovery time.");
      return;
    }

    // 🔥 Passed checks
    setLoading(true);
    setReply("MemeBot is cooking... 🍳");

    try {
      localStorage.setItem("last_meme_message", trimmed);
      localStorage.setItem("last_meme_request_time", now.toString());

      const res = await fetch("http://localhost:3001/meme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      });

      const data: { reply?: string } = await res.json();

      setReply(data.reply || "Even memes failed this time 💀");

      // 🔥 Increment only on success
      localStorage.setItem(key, String(count + 1));
    } catch (err: unknown) {
      setReply("When API says no but user says go 😭");
    }

    setLoading(false);
    setInput("");
  };

  return (
    <section
      id="about-section"
      className="
        max-w-3xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-6
        flex flex-col gap-6
      "
    >
      {/* 🔥 Heading */}
      <div
        className="
          text-base sm:text-lg md:text-xl
          italic text-gray-700 text-center
        "
      >
        “I use AI responsibly — human judgment and good taste are still
        non-negotiable.”
      </div>

      {/* 🔥 Content */}
      <div
        className="
          flex flex-col gap-4
          text-sm sm:text-base
          leading-relaxed
          text-gray-800
        "
      >
        <p>
          I’m a Software Engineer with 5+ years of experience building
          cloud-native applications across healthcare and financial services. I
          enjoy solving complex engineering problems and creating software
          that's reliable, accessible, and built to last.
        </p>
        <p>
          My work spans the full stack—from React and Angular frontends to Java
          backend services, event-driven architectures with Kafka, FHIR
          integrations, and cloud platforms on AWS and Azure. I enjoy turning
          complex business problems into simple, maintainable solutions (and
          occasionally winning arguments with the compiler).
        </p>
        <p>
          Outside of work, I’m building an open-source AI-powered resume
          analysis platform and exploring software architecture, cloud
          technologies, and AI-assisted development.
        </p>
        <p>
          When I’m away from my keyboard, you'll usually find me baking, cooking
          North Indian food, or obsessing over UI details that most people won't
          notice—but everyone benefits from.
        </p>
      </div>

      {/* 🔥 MemeBot */}
      <div
        className="
          mt-4 p-4
          border rounded-2xl
          bg-gray-50
          shadow-sm
        "
      >
        <p className="text-sm sm:text-base font-semibold mb-3">
          🤖 Ask MemeBot (because why not)
        </p>

        {/* 🔥 Input + Button */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="
              w-full
              border p-2
              rounded-lg
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
            placeholder="Tell MemeBot your pain..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />

          <button
            disabled={loading}
            onClick={askMemeBot}
            className="
              w-full sm:w-auto
              px-4 py-2
              bg-black text-white
              rounded-lg text-sm
              hover:bg-gray-800
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Cooking..." : "Ask"}
          </button>
        </div>

        {/* 🔥 Response */}
        <div className="mt-3 text-sm min-h-[40px] text-gray-700">
          {reply && <p>{reply}</p>}
        </div>
      </div>
    </section>
  );
};

export default About;
