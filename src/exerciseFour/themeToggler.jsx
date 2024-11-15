import { useContext } from "react";

import { ThemeContext } from "./toggleProvider";

import DummyComponentToTestToggleTheme from "./dummyComponentToTestToggleTheme";

const ThemeToggler = () => {
  //deconstruct/extract  context state variables and functions
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
        {
     /**
      * if theme is light -- bg-color is light if dark bg-color is dark 
      * */ 
    }
        <p>Current theme: {theme}</p>
        <DummyComponentToTestToggleTheme/>
        <button className=" border-2 border-black border-dashed p-2 text-center mt-2 hover:bg-blue-500"onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };

  export default ThemeToggler;
  