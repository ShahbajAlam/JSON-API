import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "json",
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Connection Error : ", error.message);
    }
};

export { connectDB };
