import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App';
import ThemeProvider from './context/ThemeProvider';
import AppProvider from './context/AppProvider';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <MotionConfig reducedMotion="always">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MotionConfig>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
