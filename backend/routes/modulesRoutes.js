import express from "express";
import Module from "../models/Module.js";
import Attempt from "../models/Attempt.js";
import User from "../models/User.js";

const router = express.Router();

// GET /api/modules  (lista módulos)
router.get("/", async (req,res)=>{
  const modules = await Module.find();
  res.json(modules);
});

// GET /api/modules/:id
router.get("/:id", async (req,res)=>{
  const m = await Module.findById(req.params.id);
  res.json(m);
});

// POST /api/modules/:id/submit-step
router.post("/:id/submit-step", async (req,res)=>{
  const moduleId = req.params.id;
  const { userId, stepIndex, answer, timeMs } = req.body;
  const module = await Module.findById(moduleId);
  if(!module) return res.status(404).json({msg:"module not found"});
  const expected = module.steps[stepIndex].solution;
  const correct = String(answer).trim() === String(expected).trim();
  const errorType = correct ? 'none' : 'descuido'; // heurística simple
  const attempt = await Attempt.create({ user:userId, moduleId, stepIndex, answer, correct, timeMs, errorType });
  if(correct){
    const user = await User.findById(userId);
    if(user){
      user.xp += 10;
      user.coins += 1;
      await user.save();
    }
  }
  res.json({ ok:true, correct, attemptId: attempt._id });
});

export default router;

