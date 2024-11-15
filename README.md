# Moodify

Moodify is a spotify playlist generator according to your mood using AI

## Features

⭐ No signup or any kind of spotify access required

⭐ Generated playlist includes hindi and english songs combined

⭐ You can perform any sort of operation on the playlist as you would do with a regular spotify playlist

⭐ You can save/copy it to your own library in Spotify as well
## Built with

    1. React.js
    2. Node.js
    3. Redis
    4. Gemini API
    5. Spotify API

#### Live here: [Moodify](https://moodify-playlist-client.vercel.app/)

## How it works

- User describe's the mood/situation or any random text
- Gemini API analyses the user input and identify the mood
- Then, Spotify API generates the whole playlist around the identified mood

- Check below:
![Moodify Flow](/packages/client/public/moodify-diagram.png)

## Note: Why Gemini is not generating playlist

- Gemini only identifies the mood

- Doing everything with AI is not feasible and also add some vague steps

- Moodify generates playlist with Spotify API and it's also build in a way to add hindi and english songs both
