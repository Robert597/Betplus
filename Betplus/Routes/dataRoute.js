import express from "express";
import { dataController } from "../Controllers/getData.js";

const dataRoute = express.Router();

dataRoute.get('/', dataController);

export default dataRoute;