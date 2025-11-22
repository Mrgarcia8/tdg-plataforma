import { useState } from "react";
import { calcularNivel } from "../gamificacion";

export default function Dashboard() {
  const [xpTotal] = useState(120);
  const datos = calcularNivel(xpTotal);

  return (
    <div style={{

      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1 style={{ marginBottom: "1rem" }}>Bienvenido, Usuario</h1>

    <div style={{
      background: "#fff",
      padding: "1rem",
      borderRadius: "10px",
      marginBottom: "1rem",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
       <h3>Nivel {datos.nivel} ⭐</h3>
       <p>XP: {datos.xpNivelActual} / {datos.xpParaSubir}</p>

    <div style={{
      background: "#ddd",
      height: "15px",
      borderRadius: "10px",
      marginTop: "0.5rem"
    }}>
    <div style={{
      height: "15px",
      borderRadius: "10px",
      width: `${datos.porcentaje}%`,
      background: "#4CAF50"
    }}></div>
  </div>
</div>

      <div style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem"
      }}>
        <div style={{
          flex: 1,
          background: "white",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)"
        }}>
          <h3>XP</h3>
          <p>120 XP</p>
        </div>

        <div style={{
          flex: 1,
          background: "white",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)"
        }}>
          <h3>Monedas</h3>
          <p>50 monedas</p>
        </div>

        <div style={{
          flex: 1,
          background: "white",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)"
        }}>
          <h3>Insignias</h3>
          <p>2 Insignias obtenidas</p>
        </div>
      </div>
      <button
        onClick={() => window.location.href = "/insignias"}
        style={{
          marginTop: "1rem",
          padding: "1rem",
          width: "100%",
          background: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "1rem"
       }}
>
  Ver Insignias
</button>


      <h2>Módulos de Aprendizaje</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        <div
          onClick={() => window.location.href = "/modulo"}
          style={{
          background: "white",
          padding: "1.2rem",
          borderRadius: "10px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
          cursor: "pointer"
      }}
>
         <h3>Módulo 1: Conceptos Básicos</h3>
         <p>Progreso: 40%</p>
        </div>

        <div style={{
          background: "white",
          padding: "1.2rem",
          borderRadius: "10px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
          cursor: "pointer"
        }}>
          <h3>Módulo 2: Problemas Intermedios</h3>
          <p>Progreso: 0%</p>
        </div>
      </div>
    </div>
  );
}
