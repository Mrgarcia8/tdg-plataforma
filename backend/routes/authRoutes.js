import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// register (solo para seed/demo)
// POST /api/auth/register
router.post("/register", async (req,res)=>{
  const { name,email,password,role } = req.body;
  const existing = await User.findOne({email});
  if(existing) return res.status(400).json({msg:"email exists"});
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const u = await User.create({ name, email, passwordHash: hash, role });
  res.json({ ok:true, userId: u._id });
});

// login
// POST /api/auth/login
router.post("/login", async (req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(401).json({msg:"user not found"});
  const match = await bcrypt.compare(password, user.passwordHash);
  if(!match) return res.status(401).json({msg:"invalid credentials"});
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: { _id:user._id, name:user.name, role:user.role, xp:user.xp }});
});

export default router;
