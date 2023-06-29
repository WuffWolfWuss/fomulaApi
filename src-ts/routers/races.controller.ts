import { getAllRaces, getQueryRaces } from "../models/race.model";

export async function getRaceResults(req, res) {
  return res.status(200).json(await getAllRaces());
}

export async function getQueryResults(req, res) {
  const query = req.body;
  const { year, ...rest } = query;
  return res.status(200).json(await getQueryRaces(year, rest));
}

//module.exports = { getRaceResults, getQueryResults };
