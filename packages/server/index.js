require("dotenv").config();

const express = require("express");
const cors = require("cors");

const geminiRouter = require("./routes/gemini.routes");
const spotifyRouter = require("./routes/spotify.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/gemini", geminiRouter);
app.use("/spotify", spotifyRouter);

app.listen(8000, () => console.log("server started"));
