import * as express from "express";
import { getRaceResults, getQueryResults } from "./races.controller";

const raceRouter = express.Router();

raceRouter.get("/races", getRaceResults);
raceRouter.post("/races/query", getQueryResults);

export default raceRouter;
