import React, {useEffect, useState} from 'react';
import { api } from '../api/api';
import FocusBar from './FocusBar';
import { useParams } from 'react-router-dom';

export default function ModulePlayer({user}){
  const { id } = useParams();
  const [module, setModule] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [start, setStart] = useState(() => Date.now());


  useEffect(()=>{ api.get(`/modules/${id}`).then(r=>{ setModule(r.data); setStart(Date.now()) }) },[id]);

  if(!module) return <div className="container">Cargando...</div>;
  if(stepIndex >= module.steps.length) return <div className="container card"><h3>¡Módulo completado!</h3></div>;

  const step = module.steps[stepIndex];

  async function submitStep(){
    const timeMs = Date.now() - start;
    const res = await api.post(`/modules/${id}/submit-step`, { userId: user._id, stepIndex, answer, timeMs });
    setFeedback(res.data.correct ? 'Correcto ✅' : 'Incorrecto ❌');
    if(res.data.correct){
      setTimeout(()=>{ setStepIndex(s=>s+1); setAnswer(''); setFeedback(null); setStart(Date.now()) }, 700);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>{module.title}</h3>
        <FocusBar duration={step.maxTimeMs} />
        <p style={{marginTop:12}}>{step.prompt}</p>
        <input className="input" value={answer} onChange={e=>setAnswer(e.target.value)} />
        <div style={{marginTop:8}}>
          <button className="btn-primary" onClick={submitStep}>Enviar paso</button>
          {feedback && <span style={{marginLeft:10}}>{feedback}</span>}
        </div>
      </div>
    </div>
  );
}
