const express = require("express");
const { getRaceResults, getQueryResults } = require("./races.controller");

const raceRouter = express.Router();

raceRouter.get("/races", getRaceResults);
raceRouter.post("/races/query", getQueryResults);

module.exports = raceRouter;
