import React, { useContext } from "react";
import stocksData from "../default data/stocksdata";
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
import { Link } from "react-router-dom";
import themeContext from "../context/themecontext";

function Home() {
  const { theme } = useContext(themeContext);
  const CustomDot = (props) => {
    const { cx, cy, stroke } = props;
    return <Dot cx={cx} cy={cy} r={2} stroke={stroke} fill={stroke} />;
  };
  return (
    <div>
      <div className="py-10">
        <h1 className="text-4xl text-center text-zinc-600 dark:text-zinc-300 ">
          Welcome to{" "}
          <span className="text-green-600 dark:text-green-500">
            Stock Vision
          </span>
        </h1>
        <p className="text-center font-light">
          your essential tool for instant stock market evaluation
        </p>
      </div>
      <p className="text-justify">
        Discover in-depth stock performance data in the Company section,
        visualize company stock graphs and trends through Stock Vision’s Stock
        Analysis, and stay informed on key economic indicators in the Economy
        section. Monitor top-performing and underperforming stocks with our Top
        Gainers and Losers feature, and access the latest financial news to keep
        you well-informed.
      </p>
      <div className="py-6">
        <h3 className="text-center text-xl mb-4 bg-green-500/60 dark:text-white">
          Company Analysis with Graph
        </h3>
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
            <CartesianGrid  stroke={theme == "dark" ? "#4b5563" : "#d1d5db"} />
            <XAxis dataKey="date" stroke={theme == "dark" ? "#9ca3af" : "#4b5563"} />
            <YAxis domain={[231, "dataMax"]}  stroke={theme == "dark" ? "#9ca3af" : "#4b5563"} />
            <Tooltip
              contentStyle={
                theme == "dark"
                  ? {
                      backgroundColor: "#282c34",
                      borderRadius: "10px",
                      color: "#fff",
                      border:"1px solid #a1a1aa"
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
        <div className="flex py-1 gap-4 justify-center">
          <p>Discover in-depth company data and graphical analyses</p>
          <Link
            to="/companies"
            className="bg-blue-500 dark:bg-blue-600 h-min text-white px-3 rounded"
          >
            visit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
