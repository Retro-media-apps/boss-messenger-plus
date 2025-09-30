    import { useState } from 'react';

    export default function HelpPage(){
  const [open, setOpen] = useState(false);
  return (
    <div style={{padding:24,fontFamily:'Inter, sans-serif'}}>
      <h1>Help — Boss Messenger Plus</h1>
      <p>Use the walkthrough to see how features work.</p>
      <button onClick={() => setOpen(true)} style={{marginTop:12,padding:'8px 12px',background:'#1e2a78',color:'white',border:'none',borderRadius:6}}>Start Walkthrough</button>

      {open && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'white',padding:20,borderRadius:8,maxWidth:800,width:'90%'}}>
            <h2>Step 1 — Make a Video Call</h2>
            <p>Open a chat and press the camera icon. This demo shows UI only.</p>
            <button onClick={() => setOpen(false)} style={{marginTop:12}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
