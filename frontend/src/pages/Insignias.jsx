import { useState } from "react";

export default function Insignias() {

  const [insignias] = useState([
    {
      id: 1,
      nombre: "Explorador Inicial",
      descripcion: "Completa tu primer módulo",
      desbloqueado: true
    },
    {
      id: 2,
      nombre: "Racha de 3",
      descripcion: "Responde correctamente 3 ejercicios seguidos",
      desbloqueado: false
    },
    {
      id: 3,
      nombre: "Maestro de la Velocidad",
      descripcion: "Convierte 3 unidades de velocidad sin errores",
      desbloqueado: false
    }
  ]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Insignias</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        {insignias.map(ins => (
          <div key={ins.id}
            style={{
              background: ins.desbloqueado ? "#d0f5d3" : "#eee",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{ins.nombre}</h3>
            <p>{ins.descripcion}</p>
            <p>
              Estado:{" "}
              <strong>
                {ins.desbloqueado ? "Desbloqueada" : "Pendiente"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
