import mongoose from "mongoose";

const raceSchema = new mongoose.Schema({
  grandPrix: String,
  date: Date,
  winner: String,
  car: String,
  lap: Number,
  time: String,
});

//connecy schema with 'race' collections
export default mongoose.model("Races", raceSchema);
