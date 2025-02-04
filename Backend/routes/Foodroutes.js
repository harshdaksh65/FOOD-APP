const express = require('express');
const {addFood , listFood,removeFood }= require('../controllers/Foodcontroller')
const multer = require('multer');

const FoodRouter = express.Router();


const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb)=> {
        cb(null, `${Date.now()} ${file.originalname}`);
    }
})

const upload = multer({ storage: storage});

FoodRouter.post('/add', upload.single("image") ,addFood);

FoodRouter.get('/list', listFood);
FoodRouter.post('/remove' , removeFood);

module.exports = FoodRouter;