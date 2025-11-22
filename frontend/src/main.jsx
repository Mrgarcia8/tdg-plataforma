import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modulo from "./pages/Modulo.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insignias from "./pages/Insignias.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/modulo" element={<Modulo />} />
      <Route path="/insignias" element={<Insignias />} />
    </Routes>
  </BrowserRouter>
)


