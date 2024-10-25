import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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
    <header className="fixed left-0 right-0 flex flex-col sm:flex-row bg-zinc-100 dark:bg-zinc-900 py-2 px-4 md:px-8 lg:px-12 xl:px-16 z-50">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          <img
            src={
              theme === "dark" ? "src/images/logo2.png" : "src/images/logo.png"
            }
            className="h-8 w-auto"
            alt="Logo"
          />
          <h1 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
            Stock Vision
          </h1>
        </div>
        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 items-center">
          <button
            onClick={toggleDarkMode}
            className="hover:bg-zinc-300 hover:outline outline-4 outline-zinc-300 dark:outline-zinc-600 dark:hover:bg-zinc-600 rounded-full aspect-square"
          >
            <img
              src={
                theme === "dark"
                  ? "src/images/dark_mode.svg"
                  : "src/images/light_mode.svg"
              }
              alt="theme"
            />
          </button>
          <div className="hidden sm:flex items-center">
            <Navigation />
          </div>
          <button className="sm:hidden" onClick={toggleMenu}>
            <img
              className="hover:bg-zinc-300 hover:outline outline-4 outline-zinc-300 dark:outline-zinc-600 dark:hover:bg-zinc-600 rounded-full aspect-square"
              src={
                openMenu
                  ? isDarkMode
                    ? "src/images/close_light.svg"
                    : "src/images/close_dark.svg"
                  : isDarkMode
                  ? "src/images/menu_light.svg"
                  : "src/images/menu_dark.svg"
              }
              alt="menu"
            />
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="flex sm:hidden w-full">
          <Navigation />
        </div>
      )}
    </header>
  );
}

function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
      <Link
        to="/"
        className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:dark:hover:text-green-400 block text-center"
      >
        Home
      </Link>
      <Link
        to="/companies"
        className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:dark:hover:text-green-400 block text-center"
      >
        Companies
      </Link>
      <Link
        to="/economy"
        className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:dark:hover:text-green-400 block text-center"
      >
        Economy
      </Link>
      <Link
        to="/news"
        className="hover:bg-green-500/60 sm:hover:bg-transparent sm:hover:text-green-500 sm:dark:hover:text-green-400 block text-center"
      >
        News
      </Link>
    </nav>
  );
}
