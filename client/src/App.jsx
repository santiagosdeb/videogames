import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./views/Home";
import ThemeContext from "./Context/ThemeContext";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${theme === "dark" ? "bg-[#121212]" : null} m-h-[100vh] w-full`}
      >
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
