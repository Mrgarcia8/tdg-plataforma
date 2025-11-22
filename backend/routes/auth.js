const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Por ahora: login SIMULADO (sin base de datos)
  if (email === "prueba@correo.com" && password === "123456") {
    return res.json({
      ok: true,
      token: "TOKEN_SIMULADO",
      user: {
        name: "Usuario Demo",
        email: email
      }
    });
  }

  return res.status(401).json({ ok: false, message: "Credenciales incorrectas" });
});

module.exports = router;
