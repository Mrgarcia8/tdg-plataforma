import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import modulesRoutes from "./routes/modulesRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// rutas
app.use("/api/auth", authRoutes);
app.use("/api/modules", modulesRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, ()=> console.log("Server listening", PORT));
  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }
})();

