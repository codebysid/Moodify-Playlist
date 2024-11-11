require("dotenv").config();
const Redis = require("redis");

const redisClient = Redis.createClient(process.env.REDIS_URL);

module.exports = { redisClient };
