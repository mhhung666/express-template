import express from "express";
import exampleController from "../controllers/hero/generateHero";

const example = express.Router();

example.all("/", exampleController);

export default example;
