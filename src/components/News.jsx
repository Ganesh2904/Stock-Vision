import React,{useContext} from "react";
import themeContext from "../context/themecontext";

function News() {
  const {theme} = useContext(themeContext);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-4">
        <h1 className="text-2xl text-green-600 dark:text-green-400">News</h1>
        <form className="border rounded-full border-zinc-400 dark:border-zinc-300 dark:focus-within:border-zinc-100 focus-within:border-zinc-600 flex justify-between items-center">
          <input
            type="text"
            placeholder="search news"
            className="bg-transparent h-8 focus:outline-none px-2 sm:w-72 md:w-80 lg:w-96"
          />
          <button className="w-8 pl-1 h-8 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-full">
          <img
                src={
                  theme === "dark"
                    ? "src/images/search_light.svg"
                    : "src/images/search_dark.svg"
                }
              />
          </button>
        </form>
      </div>
    </div>
  );
}

export default News;
