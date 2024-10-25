import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";
import themeContext from "../context/themecontext";

function Analysis() {
  const { theme } = useContext(themeContext);
  const location = useLocation();
  const { data } = location.state || {};
  const [stocksData, setStocksData] = useState([]);
  const [minLowValue, setMinLowValue] = useState(0);

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${
        data["1. symbol"]
      }&apikey=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["Information"]) alert("API ERROR: " + data["Information"]);
        if (data["Error Message"]) alert("API ERROR: " + data["Error Message"]);
        let finalData = [];
        for (let key in data["Time Series (Daily)"]) {
          let unit = {};
          unit["date"] = key;
          unit["high"] = parseFloat(
            data["Time Series (Daily)"][key]["2. high"]
          );
          unit["low"] = parseFloat(data["Time Series (Daily)"][key]["3. low"]);
          finalData.push(unit);
        }
        setStocksData(finalData);
        const minLow = Math.min(...finalData.map((item) => item.low));
        setMinLowValue(minLow);
      });
  }, []);

  const CustomDot = (props) => {
    const { cx, cy, stroke } = props;
    return <Dot cx={cx} cy={cy} r={2} stroke={stroke} fill={stroke} />;
  };

  return (
    <div>
      {data ? (
        <div className="py-4">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => history.back()}
              className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-500"
            >
              <img
                src={
                  theme === "dark"
                    ? "src/images/arrow_light.svg"
                    : "src/images/arrow_dark.svg"
                }
                style={{ opacity: "85%" }}
              />
            </button>
            <h1 className="text-2xl text-green-600 dark:text-green-400">
              Analysis
            </h1>
          </div>
          <h1 className="text-xl pt-2 p-1">{data["2. name"]}</h1>
          <div className="flex gap-4 pt-1 py-4">
            <p className="bg-blue-100 dark:bg-blue-800/30 px-2 rounded">
              Ticker: {data["1. symbol"]}
            </p>
            <p className="bg-green-100 dark:bg-green-800/40 px-2 rounded">
              Currency: {data["8. currency"]}
            </p>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={stocksData}>
              <Line
                type="monotone"
                dataKey="high"
                stroke={theme == "dark" ? "#4ade80" : "#22c55e"}
                dot={<CustomDot />}
              />
              <Line
                type="monotone"
                dataKey="low"
                stroke={theme == "dark" ? "#ec4899" : "#ec4899"}
                dot={<CustomDot />}
              />
              <CartesianGrid stroke={theme == "dark" ? "#4b5563" : "#d1d5db"} />
              <XAxis dataKey="date" stroke={theme == "dark" ? "#9ca3af" : "#4b5563"} />
              <YAxis domain={[minLowValue, "dataMax"]} stroke={theme == "dark" ? "#9ca3af" : "#4b5563"} />
              <Tooltip
                contentStyle={
                  theme == "dark"
                    ? {
                        backgroundColor: "#282c34",
                        borderRadius: "10px",
                        color: "#fff",
                        border: "1px solid #a1a1aa",
                      }
                    : {
                        backgroundColor: "rgba(255,255,255,0.4)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "10px",
                        color: "#fff",
                      }
                }
                labelStyle={
                  theme == "dark"
                    ? { color: "#ffffff", fontWeight: "500" }
                    : { color: "#18181b", fontWeight: "500" }
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Analysis;
