import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }){
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="app-layout">
      {!isAdminRoute && <Navbar />}
      <main className={`main-content ${isAdminRoute ? 'main-content--admin' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  )
}
