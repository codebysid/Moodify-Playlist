const { Router } = require("express");
const { handleDetectMood } = require("../controllers/gemini.controller");

const router = Router();

router.route("/detectMood/:moodDescription").get(handleDetectMood);

module.exports = router;
