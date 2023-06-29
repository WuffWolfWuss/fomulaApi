const cheerio = require("cheerio");
const axios = require("axios");

const races = require("./race.mongo");

const url = "https://www.formula1.com/en/results.html/2023/races.html";

//crawing race result data from website
function loadedRaceData() {
  return Promise.all(
    [2023, 2022].map((id) =>
      fetchData(
        `https://www.formula1.com/en/results.html/${id}/races.html`
      ).then((response) => {
        const data = response.data;
        const $ = cheerio.load(data);
        const raceTable = $(".resultsarchive-table > tbody > tr");
        raceTable.each(async (index, el) => {
          const rowData = $(el).find("td");
          const raceData = {
            grandPrix: rowData.find(".dark.bold").text().trim(),
            date: rowData["2"].children[0].data,
            winner:
              rowData.find("span.hide-for-tablet").text() +
              " " +
              rowData.find("span.hide-for-mobile").text(),
            car: rowData["4"].children[0].data,
            lap: rowData["5"].children[0].data,
            time: rowData["6"].children[0].data,
          };
          await saveRace(raceData);
        });
      })
    )
  );
}

async function fetchData(url) {
  let response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }
  return response;
}

async function saveRace(race) {
  await races.updateOne(
    {
      date: race.date,
    },
    race,
    { upsert: true }
  );
}

async function getAllRaces() {
  return await races.find({}, { _id: 0, __v: 0 });
}

async function getQueryRaces(year, query) {
  let findQuery;

  if (year) {
    findQuery = {
      $expr: {
        $eq: [{ $year: "$date" }, year],
      },
    };
  }
  return await races.find({ ...findQuery, ...query }, { _id: 0, __v: 0 });
}

module.exports = { loadedRaceData, getAllRaces, getQueryRaces };
