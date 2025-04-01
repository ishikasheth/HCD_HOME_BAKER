import foodModel from "../models/foodModel.js";
import fs from "fs"


// add food items

const addFood = async (req, res) => {
    // Log the incoming request for debugging
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    // Validate incoming request data
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.category) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image file uploaded." });
    }

    // Use the filename from the uploaded file
    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log("Error saving food item:", error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

export {addFood}