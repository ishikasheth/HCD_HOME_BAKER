import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async(req, res) => {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    if (!req.body.name || !req.body.description || !req.body.price || !req.body.category) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image file uploaded." });
    }

    const image_filename = req.file.filename;

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

const getFoodList = async(req, res) => {
    try {
        const foods = await foodModel.find();
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error("Error fetching food list:", error);
        res.status(500).json({ success: false, message: "Error fetching food list" });
    }
};

// Remove food item
const removeFood = async(req, res) => {
    try {
        const { id } = req.body;

        const food = await foodModel.findById(id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        const imagePath = `uploads/${food.image}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await foodModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Food item removed successfully" });
    } catch (error) {
        console.error("Error removing food item:", error);
        res.status(500).json({ success: false, message: "Failed to remove food item" });
    }
};

export { addFood, getFoodList, removeFood };