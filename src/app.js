import express from "express";
import bodyParser from "body-parser";

import { logger }  from "./lib";
import  dictionaryRouter from "./dictionary-router";

const app = express();



app.use(bodyParser.json());

app.use(logger);

app.use(express.static("./client"));

app.use("/dictionary", dictionaryRouter);

export default app;