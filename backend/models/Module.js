import mongoose from "mongoose";

const StepSchema = new mongoose.Schema({
  prompt: String,
  solution: String,
  maxTimeMs: {type:Number, default:300000} // 5 min
});

const ModuleSchema = new mongoose.Schema({
  title: String,
  description: String,
  steps: [StepSchema],
  active: {type:Boolean, default:true}
});

export default mongoose.model('Module', ModuleSchema);
