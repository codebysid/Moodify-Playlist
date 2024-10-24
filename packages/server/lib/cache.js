const moodToGenreMap = {
  energetic: {
    genres: ["pop", "edm", "rock", "electropop", "techno"],
    target_energy: 0.9,
  },
  calm: {
    genres: ["jazz", "ambient", "classical", "lofi", "acoustic"],
    target_energy: 0.3,
  },
  happy: {
    genres: ["dance", "pop", "funk", "reggae", "disco"],
    target_energy: 0.8,
  },
  sad: {
    genres: ["blues", "indie", "ballad", "classical", "soul"],
    target_energy: 0.2,
  },
  romantic: {
    genres: ["r&b", "soul", "acoustic", "jazz", "latin"],
    target_energy: 0.4,
  },
  chill: {
    genres: ["lofi", "indie", "chillhop", "downtempo", "ambient"],
    target_energy: 0.5,
  },
  angry: {
    genres: ["metal", "hard rock", "punk", "industrial", "grunge"],
    target_energy: 0.95,
  },
  nostalgic: {
    genres: ["retro", "classical", "80s", "90s", "indie"],
    target_energy: 0.4,
  },
  focused: {
    genres: ["classical", "minimal", "ambient", "electronic", "instrumental"],
    target_energy: 0.35,
  },
  motivated: {
    genres: ["hip-hop", "rap", "rock", "electronic", "indie pop"],
    target_energy: 0.85,
  },
  relaxed: {
    genres: ["chillwave", "folk", "reggae", "acoustic", "singer-songwriter"],
    target_energy: 0.4,
  },
  melancholic: {
    genres: ["indie", "acoustic", "folk", "slowcore", "neo-classical"],
    target_energy: 0.25,
  },
  joyful: {
    genres: ["pop", "indie pop", "soul", "dancehall", "gospel"],
    target_energy: 0.7,
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
  },
  adventurous: {
    genres: ["world", "folk", "latin", "afrobeat", "psytrance"],
    target_energy: 0.8,
  },
  upbeat: {
    genres: ["pop", "funk", "dance", "disco", "electronic"],
    target_energy: 0.85,
  },
  dark: {
    genres: ["darkwave", "industrial", "gothic", "doom metal", "trap"],
    target_energy: 0.6,
  },
  dreamy: {
    genres: ["dreampop", "shoegaze", "ambient", "electronic", "synthwave"],
    target_energy: 0.5,
  },
  intense: {
    genres: ["metal", "hardcore", "drum and bass", "trap", "dubstep"],
    target_energy: 0.95,
  },
  uplifting: {
    genres: ["house", "trance", "soul", "electronic", "pop"],
    target_energy: 0.75,
  },
  soulful: {
    genres: ["soul", "gospel", "r&b", "jazz", "blues"],
    target_energy: 0.4,
  },
  mysterious: {
    genres: ["trip-hop", "dark ambient", "psybient", "downtempo", "chillwave"],
    target_energy: 0.45,
  },
  groovy: {
    genres: ["funk", "disco", "soul", "jazz", "dance"],
    target_energy: 0.65,
  },
  contemplative: {
    genres: ["folk", "acoustic", "classical", "minimal", "indie"],
    target_energy: 0.3,
  },
  festive: {
    genres: ["latin", "salsa", "reggaeton", "dance", "pop"],
    target_energy: 0.85,
  },
  aggressive: {
    genres: ["metal", "punk", "hard rock", "drum and bass", "industrial"],
    target_energy: 0.9,
  },
  peaceful: {
    genres: ["ambient", "lofi", "new age", "classical", "nature sounds"],
    target_energy: 0.2,
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
  },
  rebellious: {
    genres: ["punk", "grunge", "alternative rock", "rap", "hip-hop"],
    target_energy: 0.85,
  },
  hopeful: {
    genres: ["indie", "pop", "folk", "soul", "soft rock"],
    target_energy: 0.6,
  },
  serene: {
    genres: ["ambient", "new age", "lofi", "downtempo", "classical"],
    target_energy: 0.25,
  },
  excited: {
    genres: ["electropop", "dance", "pop", "house", "trance"],
    target_energy: 0.95,
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
  },
  cheerful: {
    genres: ["pop", "jazz", "dance", "folk", "swing"],
    target_energy: 0.7,
  },
  serene: {
    genres: ["ambient", "new age", "acoustic", "instrumental", "lofi"],
    target_energy: 0.2,
  },
  triumphant: {
    genres: ["soundtrack", "epic", "orchestral", "rock", "electronic"],
    target_energy: 0.85,
  },
  confused: {
    genres: ["experimental", "glitch", "psychedelic", "avant-garde", "noise"],
    target_energy: 0.45,
  },
  lonely: {
    genres: ["indie", "folk", "slowcore", "acoustic", "blues"],
    target_energy: 0.3,
  },
  curious: {
    genres: ["experimental", "world", "ambient", "psychedelic", "electronic"],
    target_energy: 0.55,
  },
  ecstatic: {
    genres: ["trance", "house", "electronic", "dance", "techno"],
    target_energy: 0.95,
  },
  bitter: {
    genres: ["blues", "grunge", "alternative", "darkwave", "industrial"],
    target_energy: 0.4,
  },
  fearful: {
    genres: ["dark ambient", "industrial", "noise", "experimental", "gothic"],
    target_energy: 0.3,
  },
  relaxed: {
    genres: ["chillwave", "indie folk", "lofi", "jazz", "bossa nova"],
    target_energy: 0.35,
  },
  // Basic Moods
  energetic: {
    genres: ["pop", "edm", "rock"],
    target_energy: 0.9,
    target_valence: 0.8,
  },
  calm: {
    genres: ["jazz", "ambient", "classical"],
    target_energy: 0.2,
    target_valence: 0.5,
  },
  happy: {
    genres: ["dance", "pop", "reggae"],
    target_energy: 0.8,
    target_valence: 0.9,
  },
  sad: {
    genres: ["blues", "folk", "acoustic"],
    target_energy: 0.3,
    target_valence: 0.2,
  },
  excited: {
    genres: ["electronic", "house", "pop"],
    target_energy: 1.0,
    target_valence: 0.9,
  },
  relaxed: {
    genres: ["chill", "lo-fi", "soft rock"],
    target_energy: 0.3,
    target_valence: 0.6,
  },
  angry: {
    genres: ["metal", "punk", "hard rock"],
    target_energy: 0.9,
    target_valence: 0.3,
  },
  melancholic: {
    genres: ["indie", "acoustic", "alt rock"],
    target_energy: 0.4,
    target_valence: 0.3,
  },
  hopeful: {
    genres: ["soul", "indie pop", "gospel"],
    target_energy: 0.5,
    target_valence: 0.8,
  },

  // Complex Moods
  nostalgic: {
    genres: ["classic rock", "retro", "folk"],
    target_energy: 0.5,
    target_valence: 0.6,
  },
  joyful: {
    genres: ["pop", "happy hardcore", "dance"],
    target_energy: 0.8,
    target_valence: 1.0,
  },
  anxious: {
    genres: ["ambient", "minimalist", "experimental"],
    target_energy: 0.2,
    target_valence: 0.3,
  },
  confident: {
    genres: ["hip-hop", "rap", "trap"],
    target_energy: 0.7,
    target_valence: 0.8,
  },
  inspired: {
    genres: ["orchestral", "indie pop", "alternative"],
    target_energy: 0.6,
    target_valence: 0.9,
  },
  romantic: {
    genres: ["romantic", "latin", "soft jazz"],
    target_energy: 0.4,
    target_valence: 0.8,
  },
  curious: {
    genres: ["electronic", "experimental", "progressive"],
    target_energy: 0.6,
    target_valence: 0.7,
  },
  determined: {
    genres: ["rock", "punk", "metal"],
    target_energy: 0.8,
    target_valence: 0.7,
  },
  lonely: {
    genres: ["acoustic", "indie", "ballad"],
    target_energy: 0.3,
    target_valence: 0.3,
  },

  // Less Common Moods
  playful: {
    genres: ["pop punk", "electropop", "ska"],
    target_energy: 0.7,
    target_valence: 0.9,
  },
  contemplative: {
    genres: ["ambient", "new age", "classical"],
    target_energy: 0.2,
    target_valence: 0.5,
  },
  triumphant: {
    genres: ["epic", "orchestral", "soundtrack"],
    target_energy: 0.8,
    target_valence: 0.9,
  },
  frustrated: {
    genres: ["grunge", "alternative", "garage rock"],
    target_energy: 0.8,
    target_valence: 0.4,
  },
  serene: {
    genres: ["ambient", "new age", "chillwave"],
    target_energy: 0.2,
    target_valence: 0.7,
  },
  rebellious: {
    genres: ["punk rock", "grunge", "hip-hop"],
    target_energy: 0.9,
    target_valence: 0.5,
  },
  awe: {
    genres: ["orchestral", "soundtrack", "epic"],
    target_energy: 0.5,
    target_valence: 0.8,
  },
  bored: {
    genres: ["minimalist", "slowcore", "ambient"],
    target_energy: 0.2,
    target_valence: 0.4,
  },
  grateful: {
    genres: ["soul", "indie folk", "gospel"],
    target_energy: 0.5,
    target_valence: 0.9,
  },

  // More Nuanced Moods
  skeptical: {
    genres: ["industrial", "darkwave", "alt rock"],
    target_energy: 0.6,
    target_valence: 0.4,
  },
  peaceful: {
    genres: ["ambient", "classical", "lo-fi"],
    target_energy: 0.3,
    target_valence: 0.7,
  },
  adventurous: {
    genres: ["world", "electronic", "indie rock"],
    target_energy: 0.7,
    target_valence: 0.6,
  },
  amused: {
    genres: ["comedy", "novelty", "electropop"],
    target_energy: 0.6,
    target_valence: 0.8,
  },
  empowered: {
    genres: ["rock", "hip-hop", "electro"],
    target_energy: 0.8,
    target_valence: 0.8,
  },
  stressed: {
    genres: ["ambient", "dark ambient", "industrial"],
    target_energy: 0.5,
    target_valence: 0.2,
  },
  wistful: {
    genres: ["folk", "indie", "acoustic"],
    target_energy: 0.3,
    target_valence: 0.5,
  },
  enlightened: {
    genres: ["spiritual", "new age", "classical"],
    target_energy: 0.4,
    target_valence: 0.9,
  },
  motivated: {
    genres: ["electro", "edm", "pop rock"],
    target_energy: 0.8,
    target_valence: 0.8,
  },
};

module.exports = { moodToGenreMap };
