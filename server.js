import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import Connectdb from "./backend/config/db.js";
import morgan from "morgan";
import authrouter from './backend/routes/authrouter.js'
import { loginController, testcontrolar } from "./backend/controllers/authcontrol.js";
import categoryRouts from './backend/routes/categoryRouts.js'
import productRoute from './backend/routes/productRoute.js'
import cors from "cors";
import path from 'path';



//configure env
dotenv.config()

// Connectdb()
Connectdb();

//


// const { bgCyan } = require('colors')
// const express =require('express')
// const colors=require('colors')
//rest object
const app = express();
app.use(express.json({limit:'35mb'}));
app.use(morgan('dev'));

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//======================register post=========================
app.use("/api/v1/auth",authrouter);

//======================Adminpanel===========================
app.use("/api/v1/category",categoryRouts);
app.use("/api/v1/products",productRoute)

//======================login================================
app.use("/app/v1/auth",loginController);
app.use("/app/v1/auth",testcontrolar)


// app.use('*', function(req,res) {
//     res.sendFile(path.join(__dirname, './online-shopping/build'))
// })
// app.use(express.static(path.join(__dirname, './online-shopping/build')))
//rest api
app.get('/',(req,res)=>{
    res.send(
       "<h1> message : welcome to mubeen app </h1>"
)
})

//port
const PORT=process.env.PORT ;

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`.bgCyan.white)
})
