import { createContext, useState } from "react";

//create context
const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  //create theme state variable
  const [theme, setTheme] = useState("light");

  //if theme is light switch to dark vice versa
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //return context provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
