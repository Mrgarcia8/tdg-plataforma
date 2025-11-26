// src/components/Dashboard.jsx
import "./styles/duo.css";

export default function Dashboard({ onBack }) {
  return (
    <div className="duo-container">
      <h1 className="duo-title">Panel del profesor</h1>
      <p className="duo-sub">Aquí se mostrarán métricas en próximas fases.</p>
      <button className="duo-btn" onClick={onBack}>Volver</button>
    </div>
  );
}
