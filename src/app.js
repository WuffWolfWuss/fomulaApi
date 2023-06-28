const express = require("express");

const raceRouter = require("./routers/races.router");

const app = express();

app.use(express.json());
app.use(raceRouter);

module.exports = app;
