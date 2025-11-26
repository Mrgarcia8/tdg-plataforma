import React, {useEffect, useState} from "react";
import { api } from "../api/api";

export default function Dashboard({ token }){
  const [modules, setModules] = useState([]);
  useEffect(()=>{ api.get('/modules', {
   headers: { Authorization: `Bearer ${token}` }
}) .then(r=>setModules(r.data)).catch(()=>{}) },[]);
  return (
    <div className="container">
      <div className="header">
        <h2>Mi Dashboard</h2>
        <button className="btn-primary">Perfil</button>
      </div>

      <div style={{marginTop:12}} className="card">
        <h3 className="big">Módulos disponibles</h3>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
          {modules.map(m=>(
            <div key={m._id} className="card">
              <h4>{m.title}</h4>
              <p style={{color:'var(--muted)'}}>{m.description}</p>
              <button onClick={()=> window.location.href=`/module/${m._id}`} className="btn-primary">Iniciar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
