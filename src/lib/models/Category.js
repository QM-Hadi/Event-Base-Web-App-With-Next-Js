

import mongoose from 'mongoose';
const { Schema } = mongoose;


const CategorySchema = new Schema({
    title: string,
    description: string,
    thumbnail: string,

})



export const CategoryModal = mongoose.model('Categories', CategorySchema);