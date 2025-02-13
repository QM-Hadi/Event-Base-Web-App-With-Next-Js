import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };
export async function connectDB() {
    try {
        let connection = await mongoose.connect(process.env.MONGODB_URI);
        console.info('Mongodb connceted!')
        if (!MONGODB_URI) {
            throw new Error("Please define MONGODB_URI in .env.local");
        }
    }
    catch (err) {
        console.log('err in connection==> ', err)
    }
}