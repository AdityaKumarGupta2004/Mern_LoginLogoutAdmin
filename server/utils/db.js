import mongoose from "mongoose";
import 'dotenv/config'; // Ensure environment variables are loaded

const URI = process.env.MONGODB_URI;

if (!URI) {
    console.error("MONGODB_URI is not defined in the environment variables.");
    process.exit(1); // Exit with an error code
}

export const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database Connection Failed", error);
        process.exit(1);
    }
};
