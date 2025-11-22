import { useState } from "react";

export default function Modulo() {
  const preguntas = [
    {
      id: 1,
      enunciado: "Convierte 90 km/h a m/s",
      respuestaCorrecta: "25",
      tipo: "numerica"
    },
    {
      id: 2,
      enunciado: "La velocidad es una magnitud…",
      opciones: ["Vectorial", "Escalar"],
      respuestaCorrecta: "Vectorial",
      tipo: "opcion"
    }
  ];

  const [index, setIndex] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [xp, setXP] = useState(0);

  function validarRespuesta() {
    const actual = preguntas[index];

    if (respuesta.toString().trim() === actual.respuestaCorrecta) {
      setFeedback("✔ ¡Correcto! +10 XP");
      setXP(xp + 10);
      setTimeout(() => {
        setFeedback("");
        setRespuesta("");
        if (index < preguntas.length - 1) {
          setIndex(index + 1);
        }
      }, 1500);
    } else {
      setFeedback("✘ Incorrecto. Inténtalo nuevamente.");
    }
  }

  const actual = preguntas[index];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Módulo de Aprendizaje</h2>

      <p><strong>Progreso:</strong> {index + 1} / {preguntas.length}</p>
      <p><strong>XP acumulada:</strong> {xp}</p>

      <div style={{
        marginTop: "1rem",
        padding: "1rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h3>{actual.enunciado}</h3>

        {/* Entrada según tipo de pregunta */}
        {actual.tipo === "numerica" && (
          <input
            type="number"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escribe tu respuesta"
            style={{
              width: "100%",
              padding: "0.7rem",
              marginTop: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />
        )}

        {actual.tipo === "opcion" && (
          <div style={{ marginTop: "1rem" }}>
            {actual.opciones.map((op, i) => (
              <button
                key={i}
                onClick={() => setRespuesta(op)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "0.5rem",
                  padding: "0.7rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  cursor: "pointer"
                }}
              >
                {op}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={validarRespuesta}
          style={{
            marginTop: "1rem",
            background: "#4CAF50",
            border: "none",
            color: "white",
            width: "100%",
            padding: "0.8rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Enviar respuesta
        </button>

        {feedback && (
          <p style={{
            marginTop: "1rem",
            padding: "1rem",
            background: feedback.includes("Correcto") ? "#d0f5d3" : "#f8d7da",
            color: feedback.includes("Correcto") ? "#27632a" : "#8b1f24",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}
