import React, { createContext, useState } from 'react';

export const themes = {
  light: "light",
  dark: "dark",
  ligh: "light",
  dar: "dark",
};

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
