import React from 'react';

export default function Timeline({ items }) {
  return (
    <div className="timeline" style={{position:'relative',paddingLeft:40,marginTop:24}}>
      {/* Vertical line */}
      <div style={{
        position:'absolute',
        left:0,
        top:0,
        bottom:0,
        width:2,
        background:'linear-gradient(180deg, var(--color-primary), var(--color-border))'
      }}></div>

      {items.map((item, idx) => (
        <div key={idx} className="timeline-item" style={{
          position:'relative',
          marginBottom:32,
          paddingBottom:32,
          borderBottom: idx < items.length - 1 ? '1px solid var(--color-border)' : 'none'
        }}>
          {/* Timeline dot */}
          <div style={{
            position:'absolute',
            left:-43,
            top:4,
            width:10,
            height:10,
            borderRadius:'50%',
            background:'var(--color-primary)',
            border:'3px solid var(--color-bg)',
            boxShadow:'0 0 0 2px var(--color-primary)'
          }}></div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:8}}>
            <h4 style={{margin:0,fontSize:'1.1rem',color:'var(--color-text)'}}>{item.title}</h4>
            <span className="accent" style={{fontWeight:600,fontSize:'0.9rem',whiteSpace:'nowrap',marginLeft:16}}>{item.date}</span>
          </div>
          
          <p className="muted" style={{margin:'4px 0',fontWeight:600}}>{item.company}</p>
          {item.location && <p className="muted" style={{margin:0,fontSize:'0.85rem'}}>{item.location}</p>}
          
          {item.highlights && item.highlights.length > 0 && (
            <ul style={{marginTop:12,marginLeft:20,color:'var(--color-muted)'}}>
              {item.highlights.map((highlight, hIdx) => (
                <li key={hIdx} style={{marginBottom:4}}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
