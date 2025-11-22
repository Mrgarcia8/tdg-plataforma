import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");

    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!data.ok) {
        setError("Credenciales incorrectas");
        return;
      }

      // si las credenciales son correctas → activar Dashboard
      onLoginSuccess();
      
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    }
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2",
    }}>
      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial"
      }}>
        <h2 style={{ textAlign: "center" }}>Iniciar Sesión</h2>

        {error && (
          <div style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </div>
        )}

        <div style={{ marginBottom: "1rem" }}>
          <label>Correo:</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.7rem",
              marginTop: "0.3rem",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.7rem",
              marginTop: "0.3rem",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.8rem",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
