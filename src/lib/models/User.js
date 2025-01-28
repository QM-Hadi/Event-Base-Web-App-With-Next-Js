// import mongoose from 'mongoose';
// const { Schema } = mongoose;



// const userSchema = new Schema({
    // fullName: string,
    // email: string,
    // passward: string,
    // location: {
    //     lat: Number,
    //     long: Number,
    // },
    // profileImg: string,
    // adress: string,
    // bio: string,
//     name:"Bilal Raza"

// })


import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: String, // String is shorthand for {type: String}
    email: String,
    passward: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
});
export const UserModal = mongoose.models.User || mongoose.model('User', userSchema);