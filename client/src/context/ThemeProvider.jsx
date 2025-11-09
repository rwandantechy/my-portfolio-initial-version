import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });
const THEME_KEY = 'theme-preference';

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const getPreferredTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  // Apply theme to <html> attribute and store preference
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // React to system theme changes when user hasn't explicitly chosen
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      const stored = localStorage.getItem(THEME_KEY);
      if (!stored) setTheme(e.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', handler);
    else media.addListener(handler);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', handler);
      else media.removeListener(handler);
    };
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
