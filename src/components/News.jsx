import React, { useContext, useEffect, useState } from "react";
import themeContext from "../context/themecontext";

function News() {
  const { theme } = useContext(themeContext);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=stocks&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data["status"] !== "ok") alert("news api error");
        setData(data);
      })
      .catch((e) => {
        setLoading(false);
        alert("api error");
      });
  }, []);

  function search(e) {
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data["status"] !== "ok") alert("news api error");
      })
      .catch((e) => {
        setLoading(false);
        alert("api error");
      });
  }

  return (
    <div className={`${loading ? "cursor-wait" : ""} min-h-full`}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-4">
        <h1 className="text-2xl text-green-600 dark:text-green-400">News</h1>
        <form
          onSubmit={(e) => search(e)}
          className="border rounded-full border-zinc-400 dark:border-zinc-300 dark:focus-within:border-zinc-100 focus-within:border-zinc-600 flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="search news"
            className="bg-transparent h-8 focus:outline-none px-2 sm:w-72 md:w-80 lg:w-96"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
      <div>
        {data.articles && (
          <section className="grid gap-4 md:grid-cols-2 mb-4">
            {data.articles.map((a, i) => {
              console.log(a);
              return (
                <article
                  key={i}
                  class="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-zinc-700/25 bg-zinc-100 dark:bg-zinc-900 md:pt-4"
                >
                  {a.urlToImage && (
                    <img
                      src={a.urlToImage}
                      class="h-56 w-full object-contain"
                    />
                  )}
                  <div class=" h-full p-4 sm:p-6 ">
                    <p class="block text-xs text-zinc-500 dark:text-zinc-400">
                      {a.publishedAt.substring(0, 10)} | {a.author}
                    </p>

                    <a href="#">
                      <h3 class="mt-0.5 text-lg text-zinc-900 dark:text-white">
                        {a.title}
                      </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
                      {a.description}
                    </p>
                    <a
                      href={a.url}
                      target="_blank"
                      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                      Find out more
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        &rarr;
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </section>
        )}
        {data.articles && data.articles.length === 0 && <p>No results found</p>}
      </div>
    </div>
  );
}

export default News;
