import React from 'react';

export default function ProjectCard({ p }){
  return (
    <article className="card">
      <div style={{height:160,overflow:'hidden',borderRadius:6}}>
        <img src={p.image} alt={p.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
      <h3 style={{marginTop:12}}>{p.title}</h3>
      <p className="muted" style={{fontSize:14}}>{p.description}</p>
      <div style={{marginTop:8,display:'flex',gap:8,flexWrap:'wrap'}}>
        {p.tags.map(t => <span key={t} style={{fontSize:12,padding:'6px 8px',background:'#222',borderRadius:4}}>{t}</span>)}
      </div>
      <div style={{marginTop:12}}>
        <a className="btn" href={p.link}>Read more</a>
      </div>
    </article>
  )
}
