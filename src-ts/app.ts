import * as express from "express";

import raceRouter from "./routers/races.router";

const app = express();

app.use(express.json());
app.use(raceRouter);

export default app;
