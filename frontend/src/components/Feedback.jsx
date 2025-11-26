import "./styles/duo.css";

export default function Feedback({ correct, onNext }) {
  return (
    <div className="feedback-container">
      <div className={correct ? "feedback-card success" : "feedback-card error"}>
        <h2>{correct ? "¡Muy bien!" : "Respuesta incorrecta"}</h2>
        <p>{correct ? "5 + 3 = 8" : "La respuesta correcta era 8"}</p>

        {correct && (
          <div className="xp-box">
            <span>+10 XP</span>
            <span>🔥 Racha +1</span>
          </div>
        )}

        <button className="btn-next" onClick={onNext}>
          Continuar
        </button>
      </div>
    </div>
  );
}
