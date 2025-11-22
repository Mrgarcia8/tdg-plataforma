const express = require("express");
const router = express.Router();
const Attempt = require("../models/Attempt");

router.post("/submit-step", async (req, res) => {
  const { userId, moduleId, stepIndex, answer, expected, timeMs } = req.body;

  const correct = answer === expected;

  const attempt = await Attempt.create({
    user: userId,
    moduleId,
    stepIndex,
    correct,
    timeMs,
    errorType: correct ? "none" : "descuido",
  });

  res.json({ ok: true, correct });
});

module.exports = router;
