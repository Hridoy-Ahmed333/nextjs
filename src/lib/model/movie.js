import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: String,
  otherName: String,
  part: String,
  description: String,
  image: String,
  year: Number,
  airedSeason: String,
  status: String,
});

export const Movie =
  mongoose.models.movie || mongoose.model("movie", movieSchema);
//Press Ctrl + shift + r to refresh
