require("dotenv").config();
const Redis = require("redis");

const redisClient = Redis.createClient({
  url: process.env.REDIS_URL,
});

redisClient.connect().catch((err) => {
  console.error("Failed to connect to Redis:", err);
});

redisClient.on("error", (err) => {
  console.error("Redis error occurred:", err);
});

redisClient.on("ready", () => {
  console.log("Connected to Redis");
});

module.exports = { redisClient };
