const { moodToGenreMap, cache } = require("./cache");
const { StandardError } = require("./ErrorAndResponse");

async function getRecommendedSongs(accessToken, mood) {
  if (!accessToken || !mood)
    throw new StandardError(404, "Access Token or mood not found");

  const moodTrackData = moodToGenreMap[mood];
  if (!moodTrackData) {
    console.log(`Mood not in cache => ${mood}`);
    return;
  }

  const queryParams = new URLSearchParams({
    seed_genres: moodTrackData.genres.join(","),
    target_energy: moodTrackData.target_energy.toString(),
    limit: "10",
  });

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/recommendations?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response) throw new StandardError(500, "Can't get songs, try later");
    const data = await response.json();
    if (!data) throw new StandardError(501, "Tracks not valid");
    const trackUris = data?.tracks?.map((track) => track.uri);

    return trackUris;
  } catch (err) {
    console.log("Error in getting recommended songs:", err);
    throw new StandardError(500, err);
  }
}

// async function getSpotifyAccessToken() {

//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " +
//         Buffer.from(
//           process.env.SPOTIFY_CLIENT_ID +
//             ":" +
//             process.env.SPOTIFY_CLIENT_SECRET
//         ).toString("base64"),
//     },
//     body: new URLSearchParams({
//       grant_type: "authorization_code",
//       code: cache.spotifyAuthorizationCode,
//       redirect_uri: process.env.REDIRECT_URI,
//     }),
//   });
//   const data = await response.json();
//   console.log({ data });

//   if (data.description == "Authorization code expired") {
//     // invoke refresh token
//   }
//   // if (!response.data)
//   //   throw new StandardError(500, "not able to generate tokens");
//   return response.data;
// }

async function generateAccessTokenWithRefreshToken() {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      }),
    });
    const data = await res.json();
    if (!data.access_token)
      throw new StandardError(
        500,
        "Can't generate access token with refresh token"
      );

    return data.access_token;
  } catch (err) {
    console.log(err);
    throw new StandardError(
      500,
      "not able to generate access token with refresh token"
    );
  }
}

async function generatePlaylist(accessToken) {
  if (!accessToken) throw new StandardError(404, "Access token not found");
  try {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        name: "AI-Generated Temporary Playlist",
        description: "A playlist generated using AI. Open to view and save!",
        public: true,
      }),
    });
    if (!response)
      throw new StandardError(501, "Not able create playlist right now");
    console.log("playlist id", { response });
    const data = await response.json();
    console.log("playlist id", { data });
    if (!data || !data.id)
      throw new StandardError(501, "Not able to get playlist id");
    return data.id;
  } catch (err) {
    console.log(err);
    throw new StandardError(500, err);
  }
}

async function addTracksToPlaylistId(accessToken, playlistId, tracks) {
  if (!accessToken || !playlistId || !tracks)
    throw new StandardError(404, "Credentials not found");
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          uris: tracks,
        }),
      }
    );
    if (!response)
      throw new StandardError(
        501,
        "Not able to add tracks to playlist right now"
      );
    const data = await response.json();
    if (!data) throw new StandardError(501, "Not able to get playlist ");
    return data;
  } catch (err) {
    console.log(err);
    throw new StandardError(500, err);
  }
}

module.exports = {
  getRecommendedSongs,
  // getSpotifyAccessToken,
  generatePlaylist,
  generatePlaylist,
  addTracksToPlaylistId,
  generateAccessTokenWithRefreshToken,
};
