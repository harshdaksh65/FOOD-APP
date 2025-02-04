const mongoose = require('mongoose');

const Foodschemas = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    }
})

const FoodModel =mongoose.models.food || mongoose.model('Food', Foodschemas);

module.exports =  FoodModel;