/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const rootThemeId = "rootHtml";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = (data) => {
    console.log(data);
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.getElementById(rootThemeId).classList.remove("dark", "light");
    document.getElementById(rootThemeId).classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useTheme, rootThemeId };
