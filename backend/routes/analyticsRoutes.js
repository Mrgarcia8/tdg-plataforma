import express from "express";
import Attempt from "../models/Attempt.js";

const router = express.Router();

// GET /api/analytics/user/:id/summary
router.get("/user/:id/summary", async (req,res)=>{
  const userId = req.params.id;
  const attempts = await Attempt.find({ user: userId });
  const total = attempts.length;
  const correct = attempts.filter(a => a.correct).length;
  const avgTime = attempts.reduce((s,a)=> s + (a.timeMs||0),0) / Math.max(1,total);
  res.json({ totalAttempts: total, correct, avgTimeMs: isNaN(avgTime)?0:Math.round(avgTime) });
});

export default router;
