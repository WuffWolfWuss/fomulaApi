const express = require("express");
const { getRaceResults } = require("./races.controller");

const raceRouter = express.Router();

raceRouter.get("/races", getRaceResults);

module.exports = raceRouter;
