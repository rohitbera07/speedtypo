const express = require('express')
require('dotenv').config();
const cors =require('cors')
const mongoose = require('mongoose')
const scoreRoutes = require('./routes/scoreboard')

const app= express();
app.use(express.json());
app.use(cors({
  origin: 'https://speedtypo-rohitbera07s-projects.vercel.app', // frontend origin
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected to Mongodb")})
    .catch((err)=>{console.log("database error"),err}) 

    app.use('/scores',scoreRoutes);
    
    const PORT = process.env.PORT || 5000
    app.listen(PORT,()=>{console.log("Server Started")})