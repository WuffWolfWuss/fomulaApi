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

//const cheerio = require("cheerio"); // khai báo module cheerio
//const axios = require("axios");

//const url = "https://www.formula1.com/en/results.html/2023/races.html";

// fetchData(url).then((response) => {
//   const rows = [];
//   const data = response.data;
//   const $ = cheerio.load(data);
//   const raceTable = $(".resultsarchive-table > tbody > tr");
//   raceTable.each((index, el) => {
//     //let title = $(el).find("td").text();
//     const rowData = $(el).find("td");
//     const raceData = {
//       grandPrix: rowData.find(".dark.bold").text().trim(),
//       date: rowData["2"].children[0].data,
//       winner:
//         rowData.find("span.hide-for-tablet").text() +
//         " " +
//         rowData.find("span.hide-for-mobile").text(),
//       car: rowData["4"].children[0].data,
//       lap: rowData["5"].children[0].data,
//       time: rowData["6"].children[0].data,
//     };
//     //console.log(raceData);
//   });
// });

// async function fetchData(url) {
//   let response = await axios(url).catch((err) => console.log(err));

//   if (response.status !== 200) {
//     console.log("Error occurred while fetching data");
//     return;
//   }
//   return response;
// }
