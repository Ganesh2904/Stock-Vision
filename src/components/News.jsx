import React, { useContext, useEffect, useState } from "react";
import themeContext from "../context/themecontext";

function News() {
  const { theme } = useContext(themeContext);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [disableNext,setDisableNext] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=stocks&language=en&pageSize=10&page=${page}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data["status"] !== "ok") alert("api error: " + data["message"]);
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        setLoading(false);
        alert("api error");
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${
        input || "stocks"
      }&language=en&pageSize=10&page=${page}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data["status"] !== "ok") alert("API Error: "+data["message"]);
      })
      .catch((e) => {
        setLoading(false);
        alert("API Error");
      });
  }, [page]);

  useEffect(()=>{
    if(data["articles"]){
      if(data["articles"].length<10) setDisableNext(true);
      else setDisableNext(false);
    } else setDisableNext(true);
  },[page,data])

  function search(e) {
    setPage(1);
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&language=en&pageSize=10&page=${page}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data["status"] !== "ok") alert("API Error: "+data["message"]);
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
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="inline-flex disabled:cursor-not-allowed disabled:bg-white dark:disabled:bg-zinc-800 size-8 items-center justify-center rounded border-2 border-zinc-300 disabled:border-none  bg-zinc-100 text-zinc-900 rtl:rotate-180 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-xs text-zinc-900 dark:text-white">{page}</p>

        <button
          disabled={disableNext}
          onClick={() => setPage(page + 1)}
          className="inline-flex  disabled:cursor-not-allowed disabled:bg-white dark:disabled:bg-zinc-800 size-8 items-center justify-center rounded border-2 border-zinc-300 disabled:border-none  bg-zinc-100 text-zinc-900 rtl:rotate-180 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default News;
