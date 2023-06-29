import app from "./app";
import mongoose from "mongoose";

require("dotenv").config();

import { loadedRaceData } from "./models/race.model";

declare var process : {
  env: {
    MONGO_URL: string
  }
}
const MONGO_URL = process.env.MONGO_URL;

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadedRaceData(); //loaded planet data before run server

  app.listen(8000, () => {
    console.log("LISTEN TO PORT 8000...");
  });
}

startServer();
