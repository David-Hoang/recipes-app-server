import mongoose from 'mongoose'
import 'dotenv/config';

const mongoDB = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDB);
        console.log("✅ Successfully connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
    };


export default connectDB