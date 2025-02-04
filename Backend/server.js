const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const FoodRouter  = require('./routes/Foodroutes');
const app = express();
const PORT = 3000;

 
// app.set('view engine', 'hbs');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname,'public')));


connectDB();

app.use('/api/Food' ,FoodRouter);
app.use('/images', express.static('uploads'));
app.get('/', (req,res)=>{
    res.send("API WORKING") 
})
 
app.listen(PORT,()=>{
   console.log(`http://localhost:`+PORT);
});

// mongodb+srv://harshdaksh082:<db_password>@cluster0.o0xhu.mongodb.net/?