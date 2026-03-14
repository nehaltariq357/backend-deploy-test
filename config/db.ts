import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url as string)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}