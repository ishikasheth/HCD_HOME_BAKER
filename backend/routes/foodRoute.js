import express from "express";
import { addFood, getFoodList, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", getFoodList);

foodRouter.post("/remove", removeFood); // <-- Added this route

export default foodRouter;