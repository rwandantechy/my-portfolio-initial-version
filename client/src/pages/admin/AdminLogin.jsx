import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){
  const nav = useNavigate();
  function submit(e){
    e.preventDefault();
    // placeholder: accept any credentials
    nav('/admin/dashboard');
  }
  return (
    <section className="container">
      <h2 style={{color:'var(--color-text)'}}>Admin Login</h2>
      <div className="card" style={{marginTop:12,maxWidth:420}}>
        <form onSubmit={submit} style={{display:'grid',gap:12}}>
          <input placeholder="Email" required style={{padding:12}} />
          <input placeholder="Password" type="password" required style={{padding:12}} />
          <button className="btn btn--primary">Sign in</button>
        </form>
      </div>
    </section>
  )
}
