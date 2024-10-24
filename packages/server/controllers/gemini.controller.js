const { model } = require("../lib/gemini");
const { StandardError, StandardResponse } = require("../lib/ErrorAndResponse");

async function handleDetectMood(req, res) {
  const { moodDescription } = req.params;
  console.log({ moodDescription });
  if (!moodDescription)
    throw new StandardError(404, "Mood description not found");
  try {
    const mood = await model.generateContent(
      `Identify the mood/emotion represented by this input in 1 word: ${moodDescription}`
    );
    if (!mood || !mood.response.text())
      throw new StandardError({
        status: 500,
        message: "not able to process request, try later",
      });
    console.log("Gemini result is =>", mood.response.text());
    return res.json(new StandardResponse(200, { mood: mood.response.text() }));
  } catch (err) {
    console.log(err);
  }
}

module.exports = { handleDetectMood };
