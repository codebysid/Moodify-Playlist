const { StandardError, StandardResponse } = require("../lib/ErrorAndResponse");
const { redisClient } = require("../lib/redis.config");
const {
  getRecommendedSongs,
  generatePlaylist,
  addTracksToPlaylistId,
  generateAccessTokenWithRefreshToken,
} = require("../lib/spotify");
// const Redis = require("redis");

// const redisClient = Redis.createClient(process.env.REDIS_URL);

async function handleGetSongsWithMood(req, res) {
  const { aiMood: mood } = req.body;

  if (!mood) throw new StandardError(404, "Mood not found");

  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
    let accessToken = await redisClient.get("spotifyAccessToken");
    if (!accessToken) {
      accessToken = await generateAccessTokenWithRefreshToken();
      if (!accessToken) {
        throw new StandardError(500, "Not able to generate token, try again");
      }
      await redisClient.setEx("spotifyAccessToken", 3600, accessToken);
    }
    const tracks = await getRecommendedSongs(accessToken, mood);
    console.log({ tracks });
    if (!tracks)
      throw new StandardError(500, "No tracks returned from spotify");
    const playlistId = await generatePlaylist(accessToken);
    if (!playlistId) return;
    const playlistSnapshotId = await addTracksToPlaylistId(
      accessToken,
      playlistId,
      tracks
    );
    if (!playlistSnapshotId) return;
    return res.json(
      new StandardResponse(200, {
        playlistUrl: `https://open.spotify.com/playlist/${playlistId}`,
      })
    );
  } catch (err) {
    console.log(err);
    throw new StandardError(500, err);
  }
}

module.exports = { handleGetSongsWithMood };
