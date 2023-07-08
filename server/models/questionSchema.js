import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionSchema = new Schema({
  questions: { type: Array, default: [] }, // Array of questions
  answers: { type: Array, default: [] }, // Array of answers
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionSchema);
