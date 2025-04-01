import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://baker:homebaker@home-baker.kldvij4.mongodb.net/?retryWrites=true&w=majority&appName=home-baker').then(()=>console.log("DB Connected"));
}

