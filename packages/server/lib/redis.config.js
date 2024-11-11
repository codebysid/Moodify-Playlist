require("dotenv").config();
const Redis = require("redis");

const redisClient = Redis.createClient(process.env.REDIS_URL);
redisClient.on("error", (err) => {
  console.log("Redis error occurred", err);
});
module.exports = { redisClient };
