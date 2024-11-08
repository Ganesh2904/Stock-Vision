let initialData = [
  {
    "1. symbol": "IBM",
    "2. name": "International Business Machines Corp",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "1.0000",
  },
  {
    "1. symbol": "RELIANCE.BSE",
    "2. name": "Reliance Industries Limited",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.8421",
  },
  {
    "1. symbol": "NVDA",
    "2. name": "NVIDIA Corp",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.8000",
  },
  {
    "1. symbol": "AMZN",
    "2. name": "Amazon.com Inc",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "1.0000",
  },
  {
    "1. symbol": "JXBAX",
    "2. name": "JPMorgan Access Balanced Fund A",
    "3. type": "Mutual Fund",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.4103",
  },
  {
    "1. symbol": "3V64.DEX",
    "2. name": "Visa Inc",
    "3. type": "Equity",
    "4. region": "XETRA",
    "5. marketOpen": "08:00",
    "6. marketClose": "20:00",
    "7. timezone": "UTC+02",
    "8. currency": "EUR",
    "9. matchScore": "0.6667",
  },
  {
    "1. symbol": "MSFT",
    "2. name": "Microsoft Corporation",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "1.0000",
  },
  {
    "1. symbol": "HDFCBANK.BSE",
    "2. name": "HDFC Bank Limited",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.8421",
  },
  {
    "1. symbol": "BAJAJST.BSE",
    "2. name": "BAJAJ STEEL INDUSTRIES LTD.",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.6667",
  },
  {
    "1. symbol": "BAJAJCON.BSE",
    "2. name": "Bajaj Consumer Care Ltd",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.6250",
  },
  {
    "1. symbol": "SBICARD.BSE",
    "2. name": "SBI Cards and Payment Services Ltd",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.4615",
  },
  {
    "1. symbol": "VISAKAIND.BSE",
    "2. name": "VISAKA INDUSTRIES LTD.",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.5000",
  },
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
    "1. symbol": "ADANIENT.BSE",
    "2. name": "Adani Enterprises Limited",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.6250",
  },
  {
    "1. symbol": "ADANIENSOL.BSE",
    "2. name": "Adani Energy Solutions Limited",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.5556",
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
    "1. symbol": "MAHLOG.BSE",
    "2. name": "Mahindra Logistics Ltd",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.5333",
  },
  {
    "1. symbol": "MAHMF",
    "2. name": "Mahindra & Mahindra Ltd",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.5161",
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
  {
    "1. symbol": "WMT",
    "2. name": "Walmart Inc",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.7778",
  },
  {
    "1. symbol": "ORCL",
    "2. name": "Oracle Corp",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.8000",
  },
  {
    "1. symbol": "TVSELECT.BSE",
    "2. name": "TVS ELECTRONICS LTD.",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.4286",
  },
  {
    "1. symbol": "TVSMOTOR.BSE",
    "2. name": "TVS MOTOR COMPANY LTD.",
    "3. type": "Equity",
    "4. region": "India/Bombay",
    "5. marketOpen": "09:15",
    "6. marketClose": "15:30",
    "7. timezone": "UTC+5.5",
    "8. currency": "INR",
    "9. matchScore": "0.4286",
  },
];

export default initialData;
