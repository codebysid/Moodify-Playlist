const { model } = require("../lib/gemini");
const { StandardError, StandardResponse } = require("../lib/ErrorAndResponse");
const { handleGetSongsWithMood } = require("../lib/spotify");

async function handleDetectMood(req, res) {
  const { moodDescription } = req.params;
  console.log({ moodDescription });
  if (!moodDescription)
    throw new StandardError(404, "Mood description not found");
  try {
    const mood = await model.generateContent(
      `Identify the mood/emotion represented by this input in 1 word along with 5-10 synonyms , adjective  and noun forms (like lonely to loneliness, frustration to frustrated)  of the identified mood and all identified synonyms, put all in a csv format, without labelling: ${moodDescription}`
    );
    if (!mood || !mood.response.text())
      throw new StandardError({
        status: 500,
        message: "not able to process request, try later",
      });
    console.log("Gemini result is =>", mood.response.text());
    const playlistUri = await handleGetSongsWithMood(mood.response.text());
    return res.json(new StandardResponse(200, playlistUri));
  } catch (err) {
    console.log(err);
  }
}

module.exports = { handleDetectMood };
