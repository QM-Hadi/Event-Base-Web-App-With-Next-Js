import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  email: String,
  passward: String,
  bio: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin "],
  },

});
export const UserModal = mongoose.models.User || mongoose.model('User', userSchema);