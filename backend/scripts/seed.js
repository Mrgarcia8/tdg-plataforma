import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Module from "./models/Module.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

(async ()=>{
  await connectDB(process.env.MONGO_URI || "mongodb://localhost:27017/tdg");
  // crear usuarios
  const salt = await bcrypt.genSalt(10);
  const passTeacher = await bcrypt.hash("teacher123", salt);
  const passStudent = await bcrypt.hash("student123", salt);
  await User.deleteMany({});
  const teacher = await User.create({ name:"Profesor Demo", email:"teacher@demo.com", passwordHash: passTeacher, role:"teacher" });
  const student = await User.create({ name:"Estudiante Demo", email:"student@demo.com", passwordHash: passStudent, role:"student" });

  // módulos (ejercicios)
  await Module.deleteMany({});
  const mod1 = await Module.create({
    title: "Operaciones básicas - Suma y Resta",
    description: "Ejercicios paso a paso para sumar y restar números enteros",
    steps: [
      { prompt: "Suma: 7 + 5 = ?", solution: "12", maxTimeMs: 120000 },
      { prompt: "Resta: 15 - 8 = ?", solution: "7", maxTimeMs: 120000 }
    ]
  });
  const mod2 = await Module.create({
    title: "Álgebra inicial - ecuaciones simples",
    description: "Resolver ecuaciones lineales paso a paso",
    steps: [
      { prompt: "Resuelve: 2x + 3 = 11. Paso 1: resta 3 => 2x = ?", solution: "8", maxTimeMs: 180000 },
      { prompt: "Paso 2: divide ambos lados entre 2 => x = ?", solution: "4", maxTimeMs: 180000 }
    ]
  });

  console.log("Seed completo. teacher:", teacher.email, " student:", student.email);
  process.exit(0);
})();

