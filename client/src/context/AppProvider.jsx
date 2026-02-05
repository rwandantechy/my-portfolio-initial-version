import React, { createContext, useContext, useState } from 'react';
import projects from '../data/projects';

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [projectsList] = useState(projects);

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    projects: projectsList,
    loadingProjects: false,
    error: null,
    logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
