const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const { loadedRaceData } = require("./models/race.model");

const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadedRaceData(); //loaded planet data before run server

  server.listen(8000, () => {
    console.log("LISTEN TO PORT 8000...");
  });
}

startServer();
