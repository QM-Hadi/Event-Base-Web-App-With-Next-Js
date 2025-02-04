

import mongoose from 'mongoose';
const { Schema } = mongoose;


const subCategorySchema = new Schema({
    title: string,
    description: string,
    thumbnail: string,
    category: { type: mongoose.Types.ObjectId, ref: "Categories" },

})



export const SubCategoryModal = mongoose.model('subCategories', subCategorySchema);