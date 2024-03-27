import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
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

export const Series =
  mongoose.models.series || mongoose.model("series", seriesSchema);
//Press Ctrl + shift + r to refresh
