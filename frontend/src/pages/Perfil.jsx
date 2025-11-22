import { calcularNivel } from "../gamificacion";

export default function Perfil() {
  // Por ahora valores simulados
  const usuario = {
    nombre: "Estudiante Ejemplo",
    xp: 120,
    modulosCompletados: 1,
    totalModulos: 5,
    insignias: [
      { nombre: "Explorador Inicial", desbloqueada: true },
      { nombre: "Racha de 3", desbloqueada: false },
      { nombre: "Maestro de la Velocidad", desbloqueada: false }
    ]
  };

  const nivel = calcularNivel(usuario.xp);

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial",
      maxWidth: "600px",
      margin: "auto"
    }}>
      <h2>Perfil del Estudiante</h2>

      {/* Avatar y nombre */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginTop: "1rem"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          marginRight: "1rem"
        }}>
          👤
        </div>

        <div>
          <h3>{usuario.nombre}</h3>
          <p>Nivel {nivel.nivel} ⭐</p>
        </div>
      </div>

      {/* XP y barra */}
      <div style={{
        marginTop: "1.5rem",
        padding: "1rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <p><strong>XP total:</strong> {usuario.xp}</p>
        <p>XP nivel actual: {nivel.xpNivelActual} / {nivel.xpParaSubir}</p>

        <div style={{
          background: "#ddd",
          height: "15px",
          borderRadius: "10px",
          marginTop: "0.5rem"
        }}>
          <div style={{
            height: "15px",
            borderRadius: "10px",
            width: `${nivel.porcentaje}%`,
            background: "#4CAF50"
          }}></div>
        </div>
      </div>

      {/* Progreso por módulos */}
      <div style={{
        marginTop: "1.5rem",
        padding: "1rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h3>Progreso de Módulos</h3>
        <p>
          {usuario.modulosCompletados} / {usuario.totalModulos} completados
        </p>
      </div>

      {/* Insignias */}
      <div style={{
        marginTop: "1.5rem",
        padding: "1rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h3>Insignias</h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "1rem"
        }}>
          {usuario.insignias.map((ins, i) => (
            <div key={i} style={{
              background: ins.desbloqueada ? "#d0f5d3" : "#eee",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <strong>{ins.nombre}</strong>
              <p>{ins.desbloqueada ? "✔" : "✘"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cerrar sesión */}
      <button
        onClick={() => window.location.href = "/"}
        style={{
          marginTop: "2rem",
          width: "100%",
          padding: "1rem",
          background: "#e53935",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
