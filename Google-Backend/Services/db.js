//import mongoose
const mongoose=require('mongoose')

//define connection string
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/google',()=>{
    console.log('Connected to mongodb');
})

//create model to store all cloths
const Cloth = mongoose.model('Cloth',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

module.exports={
    Cloth
}
