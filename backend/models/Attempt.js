const mongoose = require("mongoose");

const AttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  moduleId: String,
  stepIndex: Number,
  correct: Boolean,
  timeMs: Number,
  errorType: {
    type: String,
    enum: ["descuido", "procedimental", "conceptual", "none"],
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attempt", AttemptSchema);
