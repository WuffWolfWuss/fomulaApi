var express = require("express");
var raceRouter = require("./routers/races.router");
var app = express();
app.use(express.json());
app.use(raceRouter);
module.exports = app;
