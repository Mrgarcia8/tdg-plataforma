// src/App.jsx
import "./components/styles/duo.css"; // apunta a duo.css dentro de src/components/styles
import Home from "./components/Home";
import Missions from "./components/Missions";
import UsersList from "./components/UsersList";
import StudentProfile from "./components/StudentProfile";
import Dashboard from "./components/Dashboard"; // opcional (se generará en fases)
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [userSummary] = useState({ name: "Alumno", xp: 120, streak: 3 }); // demo

  const nav = (target) => setScreen(target);

  return (
    <>
      {screen === "home" && <Home onNavigate={nav} userSummary={userSummary} />}

      {screen === "missions" && <Missions onBack={() => nav("home")} />}

      {screen === "users" && <UsersList onEdit={(u) => console.log("Editar", u)} />}

      {screen === "create" && <StudentProfile onCreated={() => nav("users")} />}

      {screen === "dashboard" && <Dashboard onBack={() => nav("home")} />}
    </>
  );
}
