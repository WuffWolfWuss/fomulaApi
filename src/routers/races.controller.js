const { getAllRaces } = require("../models/race.model");

async function getRaceResults(req, res) {
  return res.status(200).json(await getAllRaces());
}

module.exports = { getRaceResults };
