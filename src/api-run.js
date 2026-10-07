import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/meme", async (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `POV: you said "${message}" and expected seriousness 💀`,
  });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
