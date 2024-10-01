import "./App.css";

import { useState } from "react";

import themeContext from "./context/themecontext";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="min-h-screen flex flex-col">
      <themeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <div className="flex-grow"></div>
        <Footer />
      </themeContext.Provider>
    </div>
  );
}

export default App;
