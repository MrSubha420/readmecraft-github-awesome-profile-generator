import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    username: '',
    about: '',
    socialMedia: {},
    technologies: {
      frontend: [],
      backend: [],
      programming: [],
      database: [],
      appDev: [],
      others: [],
    },
    githubStats: { theme: 'default' },
    githubTrophies: { theme: 'default' },
    topRepoTheme: {theme: 'default'},
  });

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
