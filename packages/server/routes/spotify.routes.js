const { Router } = require("express");
const { handleGetSongsWithMood } = require("../controllers/spotify.controller");

const router = Router();

router.route("/getSongs/:mood").get(handleGetSongsWithMood);

module.exports = router;
