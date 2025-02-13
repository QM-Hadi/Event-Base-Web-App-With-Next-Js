import dbConnect from "../../utils/dbConnect";
import Category from "../../models/Category";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { title, description, thumbnail } = req.body;

      if (!title || !description || !thumbnail) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const newCategory = new Category({ title, description, thumbnail });
      await newCategory.save();

      res.status(201).json({ message: "Category added!", category: newCategory });
    } catch (error) {
      res.status(500).json({ error: "Error saving category" });
    }
  } else if (req.method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Error fetching categories" });
    }
  }
}
