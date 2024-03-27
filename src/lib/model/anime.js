import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  name: String,
  otherName: String,
  season: String,
  description: String,
  image: String,
  year: Number,
  airedSeason: String,
  episode: Number,
  status: String,
  watchedEpisode: Number,
});

export const Anime =
  mongoose.models.anime || mongoose.model("anime", animeSchema);
//Press Ctrl + shift + r to refresh
