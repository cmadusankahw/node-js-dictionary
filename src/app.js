const express = require("express");
const bodyParser = require("body-parser");

const { logger } = require("./lib");
const  dictionaryRouter  = require("./dictionary-router");

const app = express();



app.use(bodyParser.json());

app.use(logger);

app.use(express.static("./client"));

app.use("/dictionary", dictionaryRouter);

module.exports = app;