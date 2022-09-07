import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./DBConfig.js";
import axios from "axios";
import dataRoute from "./Routes/dataRoute.js";
import cors from "cors";



dotenv.config();  
connectDB();

const app = express();
//parses incoming input
app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//cross origin resource sharing
app.use(cors());

const port = process.env.PORT || 5500


app.get('/', (req, res) => {
   res.send("Welcome to Betplus server");
   
})

app.use('/data', dataRoute);

mongoose.connection.once("open", () => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
      });
})




