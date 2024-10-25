import React, { useState, useEffect } from "react";

function Economy() {
  const [topGainers, setTopGainers] = useState([]); // "ticker": "MNPR","price": "32.66","change_amount": "28.03","change_percentage": "605.3996%","volume": "19064245"
  const [topLosers, setTopLosers] = useState([]); // "ticker": "MNPR","price": "32.66","change_amount": "28.03","change_percentage": "605.3996%","volume": "19064245"
  const [gdp, setGdp] = useState([]); // "date": "2024-09-01", "value": "3.72"
  const [gdppc, setGdppc] = useState([]); // "date": "2024-09-01", "value": "3.72"
  const [infliation, setInfliation] = useState([]); // "date": "2024-09-01", "value": "3.72"
  const [unemployment, setUnemployMent] = useState([]); // "date": "2024-09-01", "value": "3.72"
  const [ff, setFf] = useState([]); // "date": "2024-09-01", "value": "3.72"
  const [treasuryYield, setTreasuryYield] = useState([]); // "date": "2024-09-01", "value": "3.72"

  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        let topGainers = data.top_gainers;
        let topLosers = data.top_losers;
        setTopGainers(topGainers.slice(0, 6));
        setTopLosers(topLosers.slice(0, 6));
      });

    fetch(
      "https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        setGdp(data.data.slice(0, 6));
      });

    fetch(
      "https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        setGdppc(data.data.slice(0, 6));
      });

    fetch("https://www.alphavantage.co/query?function=INFLATION&apikey=demo")
      .then((res) => res.json())
      .then((data) => {
        setInfliation(data.data.slice(0, 6));
      });

    fetch("https://www.alphavantage.co/query?function=UNEMPLOYMENT&apikey=demo")
      .then((res) => res.json())
      .then((data) => {
        setUnemployMent(data.data.slice(0, 6));
      });

    fetch(
      "https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        setFf(data.data.slice(0, 6));
      });

    fetch(
      "https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        setTreasuryYield(data.data.slice(0, 6));
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 py-4">
      <h1 className="text-2xl text-green-600 dark:text-green-400">Economy</h1>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Top Gainers <span className="text-sm">(today)</span></h2>
          {topGainers.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      Ticker: {data.ticker}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.change_percentage}
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Top Losers <span className="text-sm">(today)</span></h2>
          {topLosers.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      Ticker: {data.ticker}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.change_percentage}
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">GDP <span className="text-sm">(yearly)</span></h2>
          {gdp.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} bn$
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">GDP Per Capita <span className="text-sm">(yearly)</span></h2>
          {gdppc.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} $
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Infliation <span className="text-sm">(yearly)</span></h2>
          {infliation.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} %
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Federal Funds Rate <span className="text-sm">(monthly)</span></h2>
          {ff.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} %
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Unemployment <span className="text-sm">(yearly)</span></h2>
          {unemployment.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} %
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border dark:border-zinc-700 rounded-lg">
          <h2 className="text-xl text-center py-2 text-green-600 dark:text-green-400">Treasury Yield <span className="text-sm">(yearly)</span></h2>
          {treasuryYield.map((data, i) => {
            return (
              <div key={i} className="flow-root rounded-lg even:bg-zinc-100 even:dark:bg-zinc-900 py-3 shadow-sm ">
                <dl className="-my-3 divide-y text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                    <dt className="font-medium text-gray-900 dark:text-white">
                      {data.date}
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                      {data.value} %
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Economy;
