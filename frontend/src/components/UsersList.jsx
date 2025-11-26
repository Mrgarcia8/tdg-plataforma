import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/duo.css"; // DISEÑO GLOBAL

export default function UsersList({ onEdit }) {
  const [users, setUsers] = useState([]);

  // Cargar usuarios
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("http://localhost:4000/api/users");
        if (Array.isArray(res.data.data)) {
          setUsers(res.data.data);
        } else {
          console.error("La API no devolvió un array:", res.data);
          setUsers([]);
        }
      } catch (err) {
        console.error("Error cargando usuarios:", err);
      }
    }
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  return (
    <div className="duo-container">
      <h1 className="duo-title">👩‍🏫 Gestión de Estudiantes</h1>
      <p className="duo-sub">Registra, edita y administra estudiantes fácilmente</p>

      {/* LISTA */}
      {users.map((user) => (
        <div key={user._id} className="duo-card">
          <h3 style={{ fontSize: "22px", marginBottom: "8px", color: "#1C3D63" }}>
            👦 {user.nombre}
          </h3>
          <p style={{ marginBottom: "10px", color: "#6f6f6f" }}>{user.email}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="duo-btn"
              onClick={() => onEdit(user)}
            >
              ✏️ Editar
            </button>

            <button
              className="duo-btn duo-btn-red"
              onClick={() => deleteUser(user._id)}
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ))}

      {users.length === 0 && (
        <div className="duo-card">
          <h3 style={{ color: "#1C3D63" }}>Aún no hay estudiantes registrados</h3>
          <p style={{ color: "#6f6f6f" }}>Agrega uno desde el formulario superior.</p>
        </div>
      )}
    </div>
  );
}
