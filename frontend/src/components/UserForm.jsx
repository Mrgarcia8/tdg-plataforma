import { useState } from "react";
import { createUser } from "../services/userService";

const UserForm = ({ reload }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUser({ nombre, email, password });

    setNombre("");
    setEmail("");
    setPassword("");

    reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Usuario</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default UserForm;
