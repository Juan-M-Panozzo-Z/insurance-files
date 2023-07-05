import mongoose from "mongoose";
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs";

async function dbConnect() {
    try {
        await mongoose.connect(MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;
