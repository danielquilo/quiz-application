import mongoose from "mongoose";
const { Schema } = mongoose;

/** result model */
const resultSchema = new Schema({
  username: { type: String },
  result: { type: Array, default: [] }, // Array of results
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: '' }, // Typo corrected from "achived" to "achieved"
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Result', resultSchema);
