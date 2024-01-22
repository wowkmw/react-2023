/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const prevThemeMode = window.localStorage.getItem("themeMode");
    if (prevThemeMode) {
      setThemeMode(prevThemeMode);
    }
  }, []);

  const darkTheme = (data) => {
    console.log(data);
    setThemeMode("dark");
    window.localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    window.localStorage.setItem("themeMode", "light");
  };

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useTheme };
