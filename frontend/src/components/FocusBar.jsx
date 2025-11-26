import React, {useEffect, useState} from 'react';

export default function FocusBar({duration=300000}){
  const [pct, setPct] = useState(100);
  useEffect(()=>{
    const start = Date.now();
    const id = setInterval(()=>{
      const elapsed = Date.now() - start;
      const newPct = Math.max(0, 100 - (elapsed/duration)*100);
      setPct(newPct);
      if(newPct <= 0) clearInterval(id);
    },200);
    return ()=>clearInterval(id);
  },[duration]);
  return (
    <div className="focusbar" aria-label="Barra de tiempo">
      <div className="fill" style={{width:`${pct}%`, transition:'width .2s linear'}} />
    </div>
  );
}
