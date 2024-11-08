const moodToGenreMap = {
  energetic: {
    genres: ["pop", "edm", "rock", "electropop", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  calm: {
    genres: ["jazz", "ambient", "classical", "lofi", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  happy: {
    genres: ["dance", "pop", "funk", "reggae", "disco"],
    target_energy: 0.8,
    language: "hindi",
  },
  sad: {
    genres: ["blues", "indie", "ballad", "classical", "soul"],
    target_energy: 0.2,
    language: "hindi",
  },
  romantic: {
    genres: ["r&b", "soul", "acoustic", "jazz", "latin"],
    target_energy: 0.4,
    language: "hindi",
  },
  chill: {
    genres: ["lofi", "indie", "chillhop", "downtempo", "ambient"],
    target_energy: 0.5,
    language: "hindi",
  },
  angry: {
    genres: ["metal", "hard rock", "punk", "industrial", "grunge"],
    target_energy: 0.95,
    language: "hindi",
  },
  nostalgic: {
    genres: ["retro", "classical", "80s", "90s", "indie"],
    target_energy: 0.4,
    language: "hindi",
  },
  focused: {
    genres: ["classical", "minimal", "ambient", "electronic", "instrumental"],
    target_energy: 0.35,
    language: "hindi",
  },
  motivated: {
    genres: ["hip-hop", "rap", "rock", "electronic", "indie pop"],
    target_energy: 0.85,
    language: "hindi",
  },
  relaxed: {
    genres: ["chillwave", "folk", "reggae", "acoustic", "singer-songwriter"],
    target_energy: 0.4,
    language: "hindi",
  },
  melancholic: {
    genres: ["indie", "acoustic", "folk", "slowcore", "neo-classical"],
    target_energy: 0.25,
    language: "hindi",
  },
  joyful: {
    genres: ["pop", "indie pop", "soul", "dancehall", "gospel"],
    target_energy: 0.7,
    language: "hindi",
  },
  epic: {
    genres: [
      "orchestral",
      "epic",
      "soundtrack",
      "electronic",
      "progressive rock",
    ],
    target_energy: 0.9,
    language: "hindi",
  },
  adventurous: {
    genres: ["world", "folk", "latin", "afrobeat", "psytrance"],
    target_energy: 0.8,
    language: "hindi",
  },
  upbeat: {
    genres: ["pop", "funk", "dance", "disco", "electronic"],
    target_energy: 0.85,
    language: "hindi",
  },
  dark: {
    genres: ["darkwave", "industrial", "gothic", "doom metal", "trap"],
    target_energy: 0.6,
    language: "hindi",
  },
  dreamy: {
    genres: ["dreampop", "shoegaze", "ambient", "electronic", "synthwave"],
    target_energy: 0.5,
    language: "hindi",
  },
  intense: {
    genres: ["metal", "hardcore", "drum and bass", "trap", "dubstep"],
    target_energy: 0.95,
    language: "hindi",
  },
  uplifting: {
    genres: ["house", "trance", "soul", "electronic", "pop"],
    target_energy: 0.75,
    language: "hindi",
  },
  soulful: {
    genres: ["soul", "gospel", "r&b", "jazz", "blues"],
    target_energy: 0.4,
    language: "hindi",
  },
  mysterious: {
    genres: ["trip-hop", "dark ambient", "psybient", "downtempo", "chillwave"],
    target_energy: 0.45,
    language: "hindi",
  },
  groovy: {
    genres: ["funk", "disco", "soul", "jazz", "dance"],
    target_energy: 0.65,
    language: "hindi",
  },
  contemplative: {
    genres: ["folk", "acoustic", "classical", "minimal", "indie"],
    target_energy: 0.3,
    language: "hindi",
  },
  festive: {
    genres: ["latin", "salsa", "reggaeton", "dance", "pop"],
    target_energy: 0.85,
    language: "hindi",
  },
  aggressive: {
    genres: ["metal", "punk", "hard rock", "drum and bass", "industrial"],
    target_energy: 0.9,
    language: "hindi",
  },
  peaceful: {
    genres: ["ambient", "lofi", "new age", "classical", "nature sounds"],
    target_energy: 0.2,
    language: "hindi",
  },
  quirky: {
    genres: [
      "electropop",
      "alternative",
      "indie pop",
      "psychedelic",
      "synthpop",
    ],
    target_energy: 0.6,
    language: "hindi",
  },
  rebellious: {
    genres: ["punk", "grunge", "alternative rock", "rap", "hip-hop"],
    target_energy: 0.85,
    language: "hindi",
  },
  hopeful: {
    genres: ["indie", "pop", "folk", "soul", "soft rock"],
    target_energy: 0.6,
    language: "hindi",
  },
  serene: {
    genres: ["ambient", "new age", "lofi", "downtempo", "classical"],
    target_energy: 0.25,
    language: "hindi",
  },
  excited: {
    genres: ["electropop", "dance", "pop", "house", "trance"],
    target_energy: 0.95,
    language: "hindi",
  },
  anxious: {
    genres: [
      "dark ambient",
      "industrial",
      "trip-hop",
      "experimental",
      "glitch",
    ],
    target_energy: 0.5,
    language: "hindi",
  },
  cheerful: {
    genres: ["pop", "jazz", "dance", "folk", "swing"],
    target_energy: 0.7,
    language: "hindi",
  },
  serene: {
    genres: ["ambient", "new age", "acoustic", "instrumental", "lofi"],
    target_energy: 0.2,
    language: "hindi",
  },
  triumphant: {
    genres: ["soundtrack", "epic", "orchestral", "rock", "electronic"],
    target_energy: 0.85,
    language: "hindi",
  },
  confused: {
    genres: ["experimental", "glitch", "psychedelic", "avant-garde", "noise"],
    target_energy: 0.45,
    language: "hindi",
  },
  lonely: {
    genres: ["indie", "folk", "slowcore", "acoustic", "blues"],
    target_energy: 0.3,
    language: "hindi",
  },
  curious: {
    genres: ["experimental", "world", "ambient", "psychedelic", "electronic"],
    target_energy: 0.55,
    language: "hindi",
  },
  ecstatic: {
    genres: ["trance", "house", "electronic", "dance", "techno"],
    target_energy: 0.95,
    language: "hindi",
  },
  bitter: {
    genres: ["blues", "grunge", "alternative", "darkwave", "industrial"],
    target_energy: 0.4,
    language: "hindi",
  },
  fearful: {
    genres: ["dark ambient", "industrial", "noise", "experimental", "gothic"],
    target_energy: 0.3,
    language: "hindi",
  },
  relaxed: {
    genres: ["chillwave", "indie folk", "lofi", "jazz", "bossa nova"],
    target_energy: 0.35,
    language: "hindi",
  },
  // Basic Moods
  energetic: {
    genres: ["pop", "edm", "rock"],
    target_energy: 0.9,
    target_valence: 0.8,
    language: "hindi",
  },
  calm: {
    genres: ["jazz", "ambient", "classical"],
    target_energy: 0.2,
    target_valence: 0.5,
    language: "hindi",
  },
  happy: {
    genres: ["dance", "pop", "reggae"],
    target_energy: 0.8,
    target_valence: 0.9,
    language: "hindi",
  },
  sad: {
    genres: ["blues", "folk", "acoustic"],
    target_energy: 0.3,
    target_valence: 0.2,
    language: "hindi",
  },
  excited: {
    genres: ["electronic", "house", "pop"],
    target_energy: 1.0,
    target_valence: 0.9,
    language: "hindi",
  },
  relaxed: {
    genres: ["chill", "lo-fi", "soft rock"],
    target_energy: 0.3,
    target_valence: 0.6,
    language: "hindi",
  },
  angry: {
    genres: ["metal", "punk", "hard rock"],
    target_energy: 0.9,
    target_valence: 0.3,
    language: "hindi",
  },
  melancholic: {
    genres: ["indie", "acoustic", "alt rock"],
    target_energy: 0.4,
    target_valence: 0.3,
    language: "hindi",
  },
  hopeful: {
    genres: ["soul", "indie pop", "gospel"],
    target_energy: 0.5,
    target_valence: 0.8,
    language: "hindi",
  },

  // Complex Moods
  nostalgic: {
    genres: ["classic rock", "retro", "folk"],
    target_energy: 0.5,
    target_valence: 0.6,
    language: "hindi",
  },
  joyful: {
    genres: ["pop", "happy hardcore", "dance"],
    target_energy: 0.8,
    target_valence: 1.0,
    language: "hindi",
  },
  anxious: {
    genres: ["ambient", "minimalist", "experimental"],
    target_energy: 0.2,
    target_valence: 0.3,
    language: "hindi",
  },
  confident: {
    genres: ["hip-hop", "rap", "trap"],
    target_energy: 0.7,
    target_valence: 0.8,
    language: "hindi",
  },
  inspired: {
    genres: ["orchestral", "indie pop", "alternative"],
    target_energy: 0.6,
    target_valence: 0.9,
    language: "hindi",
  },
  romantic: {
    genres: ["romantic", "latin", "soft jazz"],
    target_energy: 0.4,
    target_valence: 0.8,
    language: "hindi",
  },
  curious: {
    genres: ["electronic", "experimental", "progressive"],
    target_energy: 0.6,
    target_valence: 0.7,
    language: "hindi",
  },
  determined: {
    genres: ["rock", "punk", "metal"],
    target_energy: 0.8,
    target_valence: 0.7,
    language: "hindi",
  },
  lonely: {
    genres: ["acoustic", "indie", "ballad"],
    target_energy: 0.3,
    target_valence: 0.3,
    language: "hindi",
  },

  // Less Common Moods
  playful: {
    genres: ["pop punk", "electropop", "ska"],
    target_energy: 0.7,
    target_valence: 0.9,
    language: "hindi",
  },
  contemplative: {
    genres: ["ambient", "new age", "classical"],
    target_energy: 0.2,
    target_valence: 0.5,
    language: "hindi",
  },
  triumphant: {
    genres: ["epic", "orchestral", "soundtrack"],
    target_energy: 0.8,
    target_valence: 0.9,
    language: "hindi",
  },
  frustrated: {
    genres: ["grunge", "alternative", "garage rock"],
    target_energy: 0.8,
    target_valence: 0.4,
    language: "hindi",
  },
  serene: {
    genres: ["ambient", "new age", "chillwave"],
    target_energy: 0.2,
    target_valence: 0.7,
    language: "hindi",
  },
  rebellious: {
    genres: ["punk rock", "grunge", "hip-hop"],
    target_energy: 0.9,
    target_valence: 0.5,
    language: "hindi",
  },
  awe: {
    genres: ["orchestral", "soundtrack", "epic"],
    target_energy: 0.5,
    target_valence: 0.8,
    language: "hindi",
  },
  bored: {
    genres: ["minimalist", "slowcore", "ambient"],
    target_energy: 0.2,
    target_valence: 0.4,
    language: "hindi",
  },
  grateful: {
    genres: ["soul", "indie folk", "gospel"],
    target_energy: 0.5,
    target_valence: 0.9,
    language: "hindi",
  },

  // More Nuanced Moods
  skeptical: {
    genres: ["industrial", "darkwave", "alt rock"],
    target_energy: 0.6,
    target_valence: 0.4,
    language: "hindi",
  },
  peaceful: {
    genres: ["ambient", "classical", "lo-fi"],
    target_energy: 0.3,
    target_valence: 0.7,
    language: "hindi",
  },
  adventurous: {
    genres: ["world", "electronic", "indie rock"],
    target_energy: 0.7,
    target_valence: 0.6,
    language: "hindi",
  },
  amused: {
    genres: ["comedy", "novelty", "electropop"],
    target_energy: 0.6,
    target_valence: 0.8,
    language: "hindi",
  },
  empowered: {
    genres: ["rock", "hip-hop", "electro"],
    target_energy: 0.8,
    target_valence: 0.8,
    language: "hindi",
  },
  stressed: {
    genres: ["ambient", "dark ambient", "industrial"],
    target_energy: 0.5,
    target_valence: 0.2,
    language: "hindi",
  },
  wistful: {
    genres: ["folk", "indie", "acoustic"],
    target_energy: 0.3,
    target_valence: 0.5,
    language: "hindi",
  },
  enlightened: {
    genres: ["spiritual", "new age", "classical"],
    target_energy: 0.4,
    target_valence: 0.9,
    language: "hindi",
  },
  motivated: {
    genres: ["electro", "edm", "pop rock"],
    target_energy: 0.8,
    target_valence: 0.8,
    language: "hindi",
  },
  language: "hindi",
};

module.exports = { moodToGenreMap };
