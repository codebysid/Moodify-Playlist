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

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/gemini", geminiRouter);
app.use("/spotify", spotifyRouter);

app.listen(8000, () => console.log("server started"));
