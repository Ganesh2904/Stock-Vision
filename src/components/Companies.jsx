import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import themeContext from "../context/themecontext";
import initialData from "../default data/initialcompanydata";

function Companies() {
  const [companyData, setCompanyData] = useState(initialData);
  const [defaultData, setDefaultData] = useState(initialData);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);

  function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((v) => v.json())
      .then((data) => {
        setLoading(false);
        setCompanyData(data["bestMatches"] ? data["bestMatches"] : []);
        setDefaultData(data["bestMatches"] ? data["bestMatches"] : []);
        if (data["Error Message"]) {
          setError(data["Error Message"]);
        } else if (data["Information"]) {
          setError(data["Information"]);
        } else {
          setError(false);
        }
      })
      .catch((e) => {
        alert(e);
        setLoading(false);
      });
  }

  function getCompanyAnalysis(company) {
    navigate("/analysis", { state: { data: company } });
  }

  function sortby(filter) {
    switch (filter) {
      case "name":
        setCompanyData(
          [...companyData].sort((a, b) =>
            a["2. name"].localeCompare(b["2. name"])
          )
        );
        break;
      case "ticker":
        setCompanyData(
          [...companyData].sort((a, b) =>
            a["1. symbol"].localeCompare(b["1. symbol"])
          )
        );
        break;
      case "region":
        setCompanyData(
          [...companyData].sort((a, b) =>
            a["4. region"].localeCompare(b["4. region"])
          )
        );
        break;
      default:
        setCompanyData(defaultData);
        break;
    }
  }

  return (
    <div className={`${loading ? "cursor-wait" : ""}`}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-4">
        <h1 className="text-2xl text-green-600 dark:text-green-400">
          Companies
        </h1>
        <form
          onSubmit={(e) => handleSearch(e)}
          className="border rounded-full border-zinc-400 dark:border-zinc-300 dark:focus-within:border-zinc-100 focus-within:border-zinc-600 flex justify-between items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search companies"
            className="bg-transparent h-8 focus:outline-none px-2 sm:w-72 md:w-80 lg:w-96"
          />
          <button
            type="submit"
            className="w-8 h-8 pl-1 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-full"
          >
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
      <div className="flex gap-2 items-center pb-4">
        <label
          htmlFor="HeadlineAct"
          className="block font-medium text-gray-900 dark:text-zinc-100"
        >
          sort by:
        </label>
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-36 rounded-lg border border-gray-400  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 sm:text-sm"
          onChange={(e) => sortby(e.target.value)}
        >
          <option value="default">default</option>
          <option value="name">company name</option>
          <option value="ticker">ticker</option>
          <option value="region">country/region</option>
        </select>
      </div>
      <div className="grid gap-2 lg:gap-4 pb-4 sm:grid-cols-2 xl:grid-cols-3">
        {companyData.map((company, i) => (
          <div
            key={i}
            className="border rounded px-4 pt-1 pb-2 border-zinc-400 hover:bg-green-200 hover:border-green-600 dark:hover:bg-green-700/80"
            onClick={() => getCompanyAnalysis(company)}
            style={{ cursor: "pointer" }}
          >
            <h2 className="text-wrap font-medium">{company["2. name"]}</h2>
            <p className="font-light">{company["4. region"]}</p>
            <div className="flex gap-3">
              <p className="bg-blue-100 dark:bg-blue-800/30 px-2 rounded">
                Ticker: {company["1. symbol"]}
              </p>
              <p className="bg-green-100 dark:bg-green-800/40 px-2 rounded">
                Currency: {company["8. currency"]}
              </p>
            </div>
          </div>
        ))}
        {companyData.length == 0 && !error && <p>no result found</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Companies;
