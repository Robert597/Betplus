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
   const options = {
    method: "GET",
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead',
    params: {h2h: '33-34'},
    headers : {
        'X-RapidAPI-Key':
    '63d217a0demshec0815c456c8760p190a53jsnfa42b273f008',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      } 
   }
   axios.request(options).then(response => {
       res.json([response.data.response.length, response.data.response[0]]);
   }
        ).catch((error) => 
        console.log(error.message)
        );

        console.log("yeah");
   
})

app.use('/data', dataRoute);

mongoose.connection.once("open", () => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
      });
})




