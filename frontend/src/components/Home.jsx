// src/components/Home.jsx
import React from "react";
import "./styles/duo.css"; // importa el CSS que está en src/components/styles/duo.css

export default function Home({ onNavigate, userSummary = {} }) {
  // userSummary puede venir de App (xp, streak, avatar) — opcional
  const xp = userSummary.xp ?? 120;
  const streak = userSummary.streak ?? 3;
  const avatarLetter = (userSummary.name || "A").charAt(0).toUpperCase();

  return (
    <div className="duo-container">
      <header style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
        <div>
          <h1 className="duo-title">Misiones Matemáticas</h1>
          <p className="duo-sub">Aprende jugando — diseñado para estudiantes con TDAH (DUA)</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%", background: "#58cc02",
            display: "flex", alignItems: "center", justifyContent: "center", color: "white",
            fontWeight: 800, fontSize: 28, boxShadow: "0 6px 14px rgba(0,0,0,0.12)"
          }}>
            {avatarLetter}
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 800 }}>{xp} XP</div>
            <div style={{ color: "#666", fontSize: 13 }}>Racha: {streak} 🔥</div>
          </div>
        </div>
      </header>

      <main style={{ marginTop: 24 }}>
        {/* Misión del día (tarjeta grande) */}
        <section className="duo-card mission-card" style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <h2 className="mission-title">Misión del día</h2>
            <p style={{ margin: "6px 0 12px", color: "#555" }}>
              Resuelve una serie de ejercicios de sumas y repasa conceptos clave.
            </p>

            <div className="mission-progress" style={{ height: 18 }}>
              <div className="mission-progress-fill" style={{ width: "42%" }}></div>
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="duo-btn" onClick={() => onNavigate("missions")}>🚀 Iniciar misión</button>
              <button className="duo-btn-secondary" onClick={() => onNavigate("create")} style={{ marginLeft: 8 }}>
                ✏️ Crear perfil
              </button>
            </div>
          </div>

          <div style={{ width: 220, textAlign: "center" }}>
            <img
              alt="mascot"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Smiley.svg/512px-Smiley.svg.png"
              style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 14, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
            />
            <div style={{ marginTop: 8, color: "#444", fontWeight: 700 }}>Nivel 2 • Explorador</div>
          </div>
        </section>

        {/* Accesos rápidos (misiones, estudiantes, panel profe) */}
        <section style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
          <div className="mission-card" onClick={() => onNavigate("missions")} role="button" tabIndex={0}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>➕ Sumas</div>
            <div style={{ color: "#666" }}>Práctica rápida • 8 preguntas</div>
          </div>

          <div className="mission-card" onClick={() => onNavigate("missions")} role="button" tabIndex={0}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>✖ Multiplicar</div>
            <div style={{ color: "#666" }}>Velocidad y precisión</div>
          </div>

          <div className="mission-card" onClick={() => onNavigate("users")} role="button" tabIndex={0}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>👩‍🏫 Estudiantes</div>
            <div style={{ color: "#666" }}>Gestiona perfiles y rendimiento</div>
          </div>

          <div className="mission-card" onClick={() => onNavigate("dashboard")} role="button" tabIndex={0}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>📊 Panel docente</div>
            <div style={{ color: "#666" }}>Métricas, tiempos y exportes</div>
          </div>
        </section>
      </main>
    </div>
  );
}
