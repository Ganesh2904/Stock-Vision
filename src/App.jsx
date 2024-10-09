import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import themeContext from "./context/themecontext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Companies from "./components/Companies";
import Analysis from "./components/Analysis";
import Economy from "./components/Economy";
import News from "./components/News";
import NotFound from "./components/NotFound";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for the stored theme, default to 'light' if none found
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme === "true" ? "dark" : "light";
  });

  useEffect(() => {
    // When theme changes, apply it to the document and save it in localStorage
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <themeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <div className="flex-grow px-4 md:px-8 lg:px-12 xl:px-16">
          <Routes>
            <Route
              path="/"
              element={
                <Home/>
              }
            />
            <Route
              path="/companies"
              element={
                <Companies/>
              }
            />
            <Route
              path="/economy"
              element={
                <Economy/>
              }
            />
            <Route
              path="/news"
              element={
                <News/>
              }
            />
            <Route
              path="*"
              element={
                <NotFound/>
              }
            />
          </Routes>
        </div>
        <Footer />
      </themeContext.Provider>
    </div>
  );
}

export default App;
