import { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  // Cargar usuarios desde el backend
  const loadUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    }
  };

  // CORRECCIÓN: evitar warning por setState dentro de useEffect
  useEffect(() => {
    const fetchData = async () => {
      await loadUsers();
    };
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      loadUsers(); // recargar lista
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        Lista de Usuarios
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100 text-blue-900">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Correo</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="hover:bg-blue-50 transition">
              <td className="border p-2">{u.nombre}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(u)}
                  className="px-3 py-1 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-300"
                >
                  Editar
                </button>

                <button
                  onClick={() => deleteUser(u._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-400"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
