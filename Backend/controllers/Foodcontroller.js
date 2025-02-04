const FoodModel = require('../models/FoodModel');
const fs = require('fs');

const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}` ; 

    const Food = new FoodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: image_filename
    })
    try{
        await Food.save();
        res.json({success:true,message:"FOOD ADDED"});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Failed to add food"});
    }
}

const listFood = async(req,res)=>{

    try{
        const foods = await FoodModel.find({});
        res.json({success:true, foods});
    }
    catch(err){
        console.log(err);
        res.json({success:false, message:"Failed to fetch foods"});
    }
}

const removeFood = async(req,res)=>{
    try{
        console.log(req.body.id); 
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});  // delete image file from uploads folder after deleting food record from database.

        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food removed"});
    }
    catch(err){
        console.log(err);
        res.json({success:false, message:"Failed to remove food"});
    }
}
module.exports = {addFood, listFood, removeFood};