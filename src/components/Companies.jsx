import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import themeContext from "../context/themecontext";

let initialData = [
  {
    "1. symbol": "TCS.BSE",
    "2. name": "Tata Consultancy Services Limited",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.6667",
  },
  {
    "1. symbol": "TSCO.LON",
    "2. name": "Tesco PLC",
    "3. type": "Equity",
    "4. region": "United Kingdom",
    "5. marketOpen": "08:00",
    "6. marketClose": "16:30",
    "7. timezone": "UTC+01",
    "8. currency": "GBX",
    "9. matchScore": "0.7273",
  },
  {
    "1. symbol": "AAPL",
    "2. name": "Apple Inc",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.7143",
  },
  {
    "1. symbol": "ITCI",
    "2. name": "Intra-Cellular Therapies Inc",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.8571",
  },
  {
    "1. symbol": "ITCJ",
    "2. name": "Infinite Tech Corp",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.8571",
  },
  {
    "1. symbol": "0RIH.LON",
    "2. name": "Alphabet Inc Class A",
    "3. type": "Equity",
    "4. region": "United Kingdom",
    "5. marketOpen": "08:00",
    "6. marketClose": "16:30",
    "7. timezone": "UTC+01",
    "8. currency": "USD",
    "9. matchScore": "0.5714",
  },
];

function Companies() {
  const [companyData, setCompanyData] = useState(initialData);
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
