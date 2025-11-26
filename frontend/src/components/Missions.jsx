import "./styles/duo.css";

export default function Missions() {
  return (
    <div className="duo-container">
      <h1 className="duo-title">🧩 Misiones Matemáticas</h1>
      <p className="duo-sub">Supera retos para ganar puntos y subir de nivel</p>

      {/* MISIÓN 1 */}
      <div className="mission-box duo-card">
        <h2 className="mission-title">➕ Sumas Fantásticas</h2>
        <p>Resuelve operaciones básicas para calentar motores.</p>

        <div className="mission-progress">
          <div className="mission-progress-fill" style={{ width: "40%" }}></div>
        </div>

        <button className="duo-btn" style={{ marginTop: "15px" }}>
          🚀 Empezar
        </button>
      </div>

      {/* MISIÓN 2 */}
      <div className="mission-box duo-card">
        <h2 className="mission-title">➗ División Ninja</h2>
        <p>Reta tu velocidad dividiendo sin equivocarte.</p>

        <div className="mission-progress">
          <div className="mission-progress-fill" style={{ width: "20%" }}></div>
        </div>

        <button className="duo-btn" style={{ marginTop: "15px" }}>
          🥷 Entrar
        </button>
      </div>

      {/* MISIÓN 3 */}
      <div className="mission-box duo-card">
        <h2 className="mission-title">🔢 Retos de Secuencias</h2>
        <p>Identifica patrones para desbloquear la misión final.</p>

        <div className="mission-progress">
          <div className="mission-progress-fill" style={{ width: "65%" }}></div>
        </div>

        <button className="duo-btn" style={{ marginTop: "15px" }}>
          🧠 Resolver
        </button>
      </div>
    </div>
  );
}
