import { useState } from "react";

function UserEditModal({ user, onClose, onUpdated }) {

  // Inicializamos el estado directamente desde props:
  const [nombre, setNombre] = useState(user?.nombre || "");
  const [email, setEmail]   = useState(user?.email  || "");

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:4000/api/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email }),
    });

    const data = await res.json();

    if (data.success) {
      onUpdated();
      onClose();
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Editar Usuario</h3>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleUpdate}>Guardar Cambios</button>

        <button
          onClick={onClose}
          style={{ marginLeft: 10 }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default UserEditModal;


const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: "300px",
};

