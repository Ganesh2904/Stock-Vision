import { useState } from "react";

function Navigation() {
  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
      <a href="/" className="hover:bg-green-600/20 sm:hover:bg-transparent sm:hover:text-green-400 block text-center">one</a>
      <a href="/home" className="hover:bg-green-600/20 sm:hover:bg-transparent sm:hover:text-green-400 block text-center">two</a>
      <a href="/s" className="hover:bg-green-600/20 sm:hover:bg-transparent sm:hover:text-green-400 block text-center">three</a>
    </nav>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <header className="flex flex-col bg-zinc-900 py-2 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="src\images\logo2.png" className="h-8"/>
          <h1 className="text-2xl">Stock Vision</h1>
        </div>
        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          <button>dark</button>
          <div className="hidden sm:flex items-center">{<Navigation />}</div>
          <button className="sm:hidden" onClick={toggleMenu}>
            menu
          </button>
        </div>
      </div>
      {openMenu && <div className="flex sm:hidden">{<Navigation />}</div>}
    </header>
  );
}
