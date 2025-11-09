import React from 'react';

function Stat({title,value}){
  return (
    <div className="card" style={{padding:16}}>
      <div className="muted" style={{fontSize:12}}>{title}</div>
      <div style={{fontSize:28,fontWeight:700}}>{value}</div>
    </div>
  )
}

export default function AdminDashboard(){
  const projects = 12;
  const users = 341;
  const messages = 7;

  return (
    <section className="container">
      <h2 style={{color:'var(--color-text)'}}>Admin Dashboard</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        <Stat title="Projects" value={projects} />
        <Stat title="Users" value={users} />
        <Stat title="Messages" value={messages} />
      </div>

      <div style={{marginTop:20}}>
        <div className="card">
          <h3>Recent activity</h3>
          <ul style={{marginTop:8}}>
            <li className="muted">No real data — this is a placeholder.</li>
            <li className="muted">Integrate backend later to show activity logs and metrics.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
