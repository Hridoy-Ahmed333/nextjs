import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema({
  name: String,
  otherName: String,
  description: String,
  image: String,
  year: Number,
  season: String,
  chapter: Number,
  status: String,
  readedChapter: Number,
});

export const Manga =
  mongoose.models.manga || mongoose.model("manga", mangaSchema);
//Press Ctrl + shift + r to refresh
