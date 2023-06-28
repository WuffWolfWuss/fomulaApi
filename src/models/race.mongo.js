const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  grandPrix: String,
  date: Date,
  winner: String,
  car: String,
  lap: Number,
  time: String,
});

//connecy schema with 'race' collections
module.exports = mongoose.model("Races", raceSchema);
