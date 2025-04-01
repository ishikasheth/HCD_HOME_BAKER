import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ Parses form-data
app.use(cors());

// DB connection
connectDB();

// Serve uploaded images (optional)
app.use("/uploads", express.static("uploads"));

// API endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
