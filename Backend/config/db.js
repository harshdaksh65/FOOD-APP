const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://harshdaksh082:11223344@cluster0.agzmz.mongodb.net/FOOD-APP', {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("MongoDB connected")
    } catch(err){
        console.error(err.message)
    }
}

module.exports = connectDB;