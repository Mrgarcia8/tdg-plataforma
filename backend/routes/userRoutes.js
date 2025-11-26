import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// CRUD completo
router.post("/", createUser);        // Crear usuario
router.get("/", getUsers);           // Obtener todos
router.get("/:id", getUserById);     // Obtener uno
router.put("/:id", updateUser);      // Actualizar
router.delete("/:id", deleteUser);   // Eliminar

export default router;
