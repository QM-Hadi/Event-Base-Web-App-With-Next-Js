import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

export const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
