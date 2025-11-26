import User from "../models/User.js";

// --------------------------
// Crear usuario
// POST /api/users
// --------------------------
export const createUser = async (req, res) => {
  try {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({
        success: false,
        message: "Nombre y email son obligatorios"
      });
    }

    const newUser = await User.create({ nombre, email });

    res.json({ success: true, data: newUser });
  } catch (err) {
    console.error("Error creando usuario:", err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// --------------------------
// Obtener todos los usuarios
// GET /api/users
// --------------------------
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    console.error("Error obteniendo usuarios:", err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// --------------------------
// Obtener usuario por ID
// GET /api/users/:id
// --------------------------
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }

    res.json({ success: true, data: user });
  } catch (err) {
    console.error("Error obteniendo usuario:", err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// --------------------------
// Actualizar usuario
// PUT /api/users/:id
// --------------------------
export const updateUser = async (req, res) => {
  try {
    const { nombre, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { nombre, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }

    res.json({ success: true, data: updatedUser });
  } catch (err) {
    console.error("Error actualizando usuario:", err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// --------------------------
// Eliminar usuario
// DELETE /api/users/:id
// --------------------------
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado"
      });
    }

    res.json({
      success: true,
      message: "Usuario eliminado correctamente"
    });
  } catch (err) {
    console.error("Error eliminando usuario:", err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

