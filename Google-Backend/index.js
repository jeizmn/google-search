//server creation

//import express
const express=require('express')

//import cors
const cors=require('cors')

//creating app
const app= express()

//using cors specify oringin to the server
app.use(cors({
    origin:'http://localhost:4200'
}))

//set up port number
app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})

//json parser for server application
app.use(express.json())


const dataService=require('./Services/dataService')

//Api to get all products
app.get('/cloths',(req,res)=>{
    dataService.allCloths()

    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
