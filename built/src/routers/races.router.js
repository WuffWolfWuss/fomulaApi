var express = require("express");
var _a = require("./races.controller"), getRaceResults = _a.getRaceResults, getQueryResults = _a.getQueryResults;
var raceRouter = express.Router();
raceRouter.get("/races", getRaceResults);
raceRouter.post("/races/query", getQueryResults);
module.exports = raceRouter;
