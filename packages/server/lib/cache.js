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
  // **Positive Moods**
  happy: {
    genres: ["pop", "dance", "funk", "disco", "reggae"],
    target_energy: 0.8,
    language: "hindi",
  },
  excited: {
    genres: ["edm", "pop", "rock", "techno", "dance"],
    target_energy: 0.9,
    language: "hindi",
  },
  grateful: {
    genres: ["acoustic", "indie", "pop", "soul", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  hopeful: {
    genres: ["pop", "indie", "acoustic", "rock", "dance"],
    target_energy: 0.7,
    language: "hindi",
  },
  proud: {
    genres: ["rock", "hip-hop", "edm", "pop", "indie"],
    target_energy: 0.8,
    language: "hindi",
  },
  confident: {
    genres: ["pop", "hip-hop", "rock", "dancehall", "electropop"],
    target_energy: 0.9,
    language: "hindi",
  },
  content: {
    genres: ["indie", "acoustic", "pop", "jazz", "soul"],
    target_energy: 0.5,
    language: "hindi",
  },
  optimistic: {
    genres: ["pop", "indie", "rock", "electropop", "acoustic"],
    target_energy: 0.7,
    language: "hindi",
  },
  motivated: {
    genres: ["pop", "edm", "dance", "rock", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  compassionate: {
    genres: ["acoustic", "indie", "pop", "soul", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  playful: {
    genres: ["pop", "electropop", "indie", "dance", "funk"],
    target_energy: 0.8,
    language: "hindi",
  },
  enthusiastic: {
    genres: ["pop", "rock", "edm", "hip-hop", "dance"],
    target_energy: 0.9,
    language: "hindi",
  },
  affectionate: {
    genres: ["soul", "r&b", "jazz", "pop", "acoustic"],
    target_energy: 0.5,
    language: "hindi",
  },
  loving: {
    genres: ["r&b", "soul", "acoustic", "pop", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  sympathetic: {
    genres: ["acoustic", "pop", "indie", "soul", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  empowered: {
    genres: ["pop", "rock", "edm", "hip-hop", "dance"],
    target_energy: 0.9,
    language: "hindi",
  },
  euphoric: {
    genres: ["edm", "dance", "electropop", "pop", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  victorious: {
    genres: ["rock", "hip-hop", "edm", "pop", "dancehall"],
    target_energy: 0.8,
    language: "hindi",
  },
  triumphant: {
    genres: ["rock", "hip-hop", "edm", "pop", "dance"],
    target_energy: 0.8,
    language: "hindi",
  },
  successful: {
    genres: ["rock", "hip-hop", "pop", "edm", "dance"],
    target_energy: 0.8,
    language: "hindi",
  },
  satisfying: {
    genres: ["indie", "pop", "acoustic", "soul", "jazz"],
    target_energy: 0.6,
    language: "hindi",
  },
  blissful: {
    genres: ["indie", "acoustic", "soul", "pop", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  cheery: {
    genres: ["pop", "dance", "indie", "funk", "disco"],
    target_energy: 0.8,
    language: "hindi",
  },
  adventurous: {
    genres: ["pop", "rock", "edm", "hip-hop", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  appreciative: {
    genres: ["acoustic", "indie", "pop", "jazz", "soul"],
    target_energy: 0.5,
    language: "hindi",
  },
  satisfied: {
    genres: ["pop", "indie", "acoustic", "rock", "soul"],
    target_energy: 0.6,
    language: "hindi",
  },
  inspired: {
    genres: ["pop", "rock", "electropop", "indie", "acoustic"],
    target_energy: 0.8,
    language: "hindi",
  },

  // **Negative Moods**
  sad: {
    genres: ["blues", "soul", "indie", "ballad", "classical"],
    target_energy: 0.2,
    language: "hindi",
  },
  angry: {
    genres: ["rock", "punk", "metal", "alternative", "indie"],
    target_energy: 0.8,
    language: "hindi",
  },
  anxious: {
    genres: ["ambient", "lofi", "indie", "chillhop", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  depressed: {
    genres: ["indie", "soul", "ballad", "blues", "classical"],
    target_energy: 0.2,
    language: "hindi",
  },
  lonely: {
    genres: ["indie", "soul", "pop", "ballad", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  fearful: {
    genres: ["ambient", "darkwave", "indie", "lofi", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  guilty: {
    genres: ["indie", "pop", "acoustic", "soul", "ballad"],
    target_energy: 0.3,
    language: "hindi",
  },
  jealous: {
    genres: ["pop", "rock", "indie", "electropop", "soul"],
    target_energy: 0.5,
    language: "hindi",
  },
  nervous: {
    genres: ["ambient", "lofi", "indie", "chillhop", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  insecure: {
    genres: ["indie", "acoustic", "soul", "pop", "ballad"],
    target_energy: 0.4,
    language: "hindi",
  },
  shocked: {
    genres: ["rock", "edm", "indie", "electropop", "alternative"],
    target_energy: 0.6,
    language: "hindi",
  },
  grumpy: {
    genres: ["rock", "punk", "metal", "alternative", "indie"],
    target_energy: 0.7,
    language: "hindi",
  },
  miserable: {
    genres: ["indie", "soul", "ballad", "acoustic", "blues"],
    target_energy: 0.3,
    language: "hindi",
  },
  unhappy: {
    genres: ["indie", "soul", "blues", "acoustic", "ballad"],
    target_energy: 0.3,
    language: "hindi",
  },
  frustrated: {
    genres: ["metal", "rock", "punk", "alternative", "indie"],
    target_energy: 0.7,
    language: "hindi",
  },
  helpless: {
    genres: ["indie", "soul", "ballad", "blues", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  regretful: {
    genres: ["indie", "blues", "soul", "acoustic", "pop"],
    target_energy: 0.3,
    language: "hindi",
  },
  sorrowful: {
    genres: ["indie", "soul", "acoustic", "ballad", "blues"],
    target_energy: 0.2,
    language: "hindi",
  },
  vulnerable: {
    genres: ["indie", "pop", "acoustic", "blues", "soul"],
    target_energy: 0.3,
    language: "hindi",
  },
  defeated: {
    genres: ["blues", "soul", "ballad", "indie", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  regret: {
    genres: ["indie", "soul", "acoustic", "ballad", "blues"],
    target_energy: 0.3,
    language: "hindi",
  },
  embarrassed: {
    genres: ["indie", "pop", "rock", "electropop", "alternative"],
    target_energy: 0.4,
    language: "hindi",
  },
  humiliated: {
    genres: ["pop", "rock", "indie", "soul", "electropop"],
    target_energy: 0.4,
    language: "hindi",
  },
  bored: {
    genres: ["indie", "ambient", "chillhop", "lofi", "acoustic"],
    target_energy: 0.2,
    language: "hindi",
  },
  isolated: {
    genres: ["indie", "soul", "ballad", "acoustic", "blues"],
    target_energy: 0.3,
    language: "hindi",
  },
  stressed: {
    genres: ["rock", "edm", "metal", "techno", "indie"],
    target_energy: 0.8,
    language: "hindi",
  },
  disappointed: {
    genres: ["indie", "acoustic", "blues", "ballad", "pop"],
    target_energy: 0.3,
    language: "hindi",
  },
  disillusioned: {
    genres: ["indie", "pop", "acoustic", "blues", "soul"],
    target_energy: 0.3,
    language: "hindi",
  },
  uncomfortable: {
    genres: ["indie", "ambient", "acoustic", "lofi", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  overwhelmed: {
    genres: ["ambient", "indie", "lofi", "acoustic", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  unsettled: {
    genres: ["ambient", "indie", "lofi", "acoustic", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  unproductive: {
    genres: ["indie", "lofi", "ambient", "chillhop", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  lost: {
    genres: ["indie", "ambient", "acoustic", "lofi", "ballad"],
    target_energy: 0.2,
    language: "hindi",
  },
  tense: {
    genres: ["rock", "metal", "indie", "electropop", "punk"],
    target_energy: 0.7,
    language: "hindi",
  },
  disheartened: {
    genres: ["indie", "soul", "ballad", "acoustic", "blues"],
    target_energy: 0.3,
    language: "hindi",
  },
  apprehensive: {
    genres: ["ambient", "lofi", "indie", "chillhop", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },

  // **Neutral Moods**
  calm: {
    genres: ["lofi", "ambient", "chillhop", "acoustic", "classical"],
    target_energy: 0.4,
    language: "hindi",
  },
  confused: {
    genres: ["indie", "ambient", "electropop", "lofi", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  indifferent: {
    genres: ["ambient", "lofi", "acoustic", "indie", "jazz"],
    target_energy: 0.3,
    language: "hindi",
  },
  indecisive: {
    genres: ["ambient", "indie", "lofi", "jazz", "acoustic"],
    target_energy: 0.4,
    language: "hindi",
  },
  detached: {
    genres: ["ambient", "indie", "lofi", "jazz", "acoustic"],
    target_energy: 0.4,
    language: "hindi",
  },
  uncertain: {
    genres: ["indie", "ambient", "lofi", "acoustic", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  reflective: {
    genres: ["acoustic", "indie", "lofi", "ambient", "classical"],
    target_energy: 0.5,
    language: "hindi",
  },
  pensive: {
    genres: ["indie", "ambient", "lofi", "jazz", "classical"],
    target_energy: 0.5,
    language: "hindi",
  },
  distracted: {
    genres: ["indie", "ambient", "lofi", "acoustic", "electropop"],
    target_energy: 0.4,
    language: "hindi",
  },
  uncomfortable: {
    genres: ["indie", "lofi", "ambient", "electropop", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  mellow: {
    genres: ["lofi", "indie", "ambient", "acoustic", "classical"],
    target_energy: 0.4,
    language: "hindi",
  },
  nostalgic: {
    genres: ["indie", "ambient", "acoustic", "pop", "soul"],
    target_energy: 0.5,
    language: "hindi",
  },
  sentimental: {
    genres: ["indie", "pop", "acoustic", "soul", "ballad"],
    target_energy: 0.5,
    language: "hindi",
  },
  curious: {
    genres: ["indie", "ambient", "electropop", "rock", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
  suspicious: {
    genres: ["indie", "electropop", "ambient", "pop", "rock"],
    target_energy: 0.5,
    language: "hindi",
  },

  // **High Energy & Enthusiasm**
  energetic: {
    genres: ["edm", "pop", "dance", "rock", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  enthralled: {
    genres: ["edm", "pop", "dance", "rock", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  excited: {
    genres: ["edm", "pop", "dance", "rock", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  motivated: {
    genres: ["edm", "pop", "dance", "techno", "rock"],
    target_energy: 0.9,
    language: "hindi",
  },
  playful: {
    genres: ["pop", "indie", "electropop", "dance", "funk"],
    target_energy: 0.8,
    language: "hindi",
  },
  adventurous: {
    genres: ["pop", "rock", "edm", "hip-hop", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  confident: {
    genres: ["pop", "hip-hop", "rock", "dancehall", "electropop"],
    target_energy: 0.9,
    language: "hindi",
  },
  euphoric: {
    genres: ["edm", "dance", "electropop", "pop", "techno"],
    target_energy: 0.9,
    language: "hindi",
  },
  successful: {
    genres: ["pop", "rock", "edm", "dancehall", "techno"],
    target_energy: 0.8,
    language: "hindi",
  },
  victorious: {
    genres: ["rock", "hip-hop", "edm", "pop", "dancehall"],
    target_energy: 0.8,
    language: "hindi",
  },
  triumphant: {
    genres: ["rock", "hip-hop", "edm", "pop", "dance"],
    target_energy: 0.8,
    language: "hindi",
  },

  // **Low Energy & Relaxed**
  tired: {
    genres: ["indie", "lofi", "ambient", "acoustic", "classical"],
    target_energy: 0.2,
    language: "hindi",
  },
  lazy: {
    genres: ["indie", "lofi", "ambient", "chillhop", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  relaxed: {
    genres: ["lofi", "ambient", "chillhop", "acoustic", "classical"],
    target_energy: 0.3,
    language: "hindi",
  },
  mellow: {
    genres: ["lofi", "ambient", "chillhop", "acoustic", "classical"],
    target_energy: 0.3,
    language: "hindi",
  },
  unconcerned: {
    genres: ["indie", "lofi", "ambient", "chillhop", "acoustic"],
    target_energy: 0.2,
    language: "hindi",
  },
  apathetic: {
    genres: ["indie", "lofi", "chillhop", "ambient", "acoustic"],
    target_energy: 0.2,
    language: "hindi",
  },
  disconnected: {
    genres: ["indie", "lofi", "ambient", "chillhop", "acoustic"],
    target_energy: 0.2,
    language: "hindi",
  },
  aimless: {
    genres: ["indie", "ambient", "lofi", "acoustic", "chillhop"],
    target_energy: 0.2,
    language: "hindi",
  },

  // **Conflicted Moods**
  stressed: {
    genres: ["rock", "edm", "metal", "techno", "indie"],
    target_energy: 0.8,
    language: "hindi",
  },
  uncomfortable: {
    genres: ["indie", "ambient", "acoustic", "lofi", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  overwhelmed: {
    genres: ["ambient", "indie", "lofi", "acoustic", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },
  tense: {
    genres: ["rock", "metal", "indie", "electropop", "punk"],
    target_energy: 0.7,
    language: "hindi",
  },

  // **Emotionally Conflicted or Mixed Moods**
  vulnerable: {
    genres: ["indie", "pop", "acoustic", "blues", "soul"],
    target_energy: 0.3,
    language: "hindi",
  },
  suspicious: {
    genres: ["indie", "electropop", "ambient", "pop", "rock"],
    target_energy: 0.5,
    language: "hindi",
  },
  doubtful: {
    genres: ["indie", "acoustic", "ballad", "lofi", "ambient"],
    target_energy: 0.4,
    language: "hindi",
  },

  // **Uncertain or Undecided**
  indecisive: {
    genres: ["ambient", "indie", "lofi", "jazz", "acoustic"],
    target_energy: 0.4,
    language: "hindi",
  },
  uncertain: {
    genres: ["indie", "ambient", "lofi", "acoustic", "jazz"],
    target_energy: 0.4,
    language: "hindi",
  },

  // **Sadness and Despair**
  depressed: {
    genres: ["indie", "ballad", "soul", "acoustic", "blues"],
    target_energy: 0.2,
    language: "hindi",
  },
  lonely: {
    genres: ["indie", "blues", "acoustic", "ballad", "soul"],
    target_energy: 0.3,
    language: "hindi",
  },
  grief_stricken: {
    genres: ["indie", "acoustic", "soul", "blues", "ballad"],
    target_energy: 0.2,
    language: "hindi",
  },
  miserable: {
    genres: ["indie", "soul", "ballad", "blues", "acoustic"],
    target_energy: 0.2,
    language: "hindi",
  },
  unhappy: {
    genres: ["indie", "soul", "ballad", "blues", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  regretful: {
    genres: ["indie", "blues", "soul", "ballad", "acoustic"],
    target_energy: 0.3,
    language: "hindi",
  },
  neutral: {
    genres: ["lofi", "indie", "ambient", "acoustic", "jazz"],
    target_energy: 0.5,
    language: "hindi",
  },
};

module.exports = { moodToGenreMap };
{
  currentMood: "joy";
}

//mood to add
// [backend] { currentMood: 'delight' }
// [backend] { currentMood: 'happiness' }
// [backend] { currentMood: 'elation' }
// [backend] { currentMood: 'exhilaration' }
// [backend] { currentMood: 'bliss' }
// [backend] { currentMood: 'euphoria' }
// [backend] { currentMood: 'glee' }
// [backend] { currentMood: 'rapture' }
// [backend] { currentMood: 'jubilant' }
// [backend] { currentMood: 'joyous' }
// [backend] { currentMood: 'joyful' }
