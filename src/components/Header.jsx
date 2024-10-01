import React, { useState, useEffect, useContext } from "react";
import themeContext from "../context/themecontext";

export default function Header() {
  const { theme, setTheme } = useContext(themeContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const darkMode = storedDarkMode === "true";
    setIsDarkMode(darkMode);
    setTheme(darkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  function toggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <header className="flex flex-col bg-zinc-100 dark:bg-zinc-900 py-2 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={theme === "dark" ? "src/images/logo2.png" : "src/images/logo.png"} className="h-8" alt="Logo" />
          <h1 className="text-2xl">Stock Vision</h1>
        </div>
        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <div className="hidden sm:flex items-center"><Navigation /></div>
          <button className="sm:hidden" onClick={toggleMenu}>
            menu
          </button>
        </div>
      </div>
      {openMenu && <div className="flex sm:hidden"><Navigation /></div>}
    </header>
  );
}

function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
      <a href="/" className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:hover:textShadow-green-400 sm:dark:hover:text-green-400 block text-center textShadow">one</a>
      <a href="/home"  className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:hover:textShadow-green-400 sm:dark:hover:text-green-400 block text-center textShadow">two</a>
      <a href="/s"  className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:hover:textShadow-green-400 sm:dark:hover:text-green-400 block text-center textShadow">three</a>
    </nav>
  );
}
