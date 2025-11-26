import { useState } from "react";
import axios from "axios";
import "./styles/duo.css"; // estilos gamificados

export default function StudentProfile({ onCreated }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const crearEstudiante = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/users", {
        nombre,
        email,
      });

      alert("¡Perfil creado con éxito! 🎉");
      onCreated(); // regresa a la pantalla principal
    } catch (err) {
      console.error(err);
      alert("Error creando usuario");
    }
  };

  return (
    <div className="duo-screen">
      <div className="duo-card">
        <h1 className="duo-title">Crear Perfil</h1>
        <p className="duo-subtitle">Tu nueva aventura matemática comienza ahora ✨</p>

        <form onSubmit={crearEstudiante} className="duo-form">

          <label className="duo-label">Nombre</label>
          <input
            className="duo-input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />

          <label className="duo-label">Correo</label>
          <input
            className="duo-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            required
          />

          <button className="duo-btn-primary" type="submit">
            ¡Comenzar Misión! 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
