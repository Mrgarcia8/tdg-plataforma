import mongoose from "mongoose";

const AttemptSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  moduleId: {type: mongoose.Schema.Types.ObjectId, ref:'Module'},
  stepIndex: Number,
  answer: String,
  correct: Boolean,
  timeMs: Number,
  errorType: {type:String, enum:['descuido','procedimental','conceptual','none']},
  createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Attempt', AttemptSchema);
