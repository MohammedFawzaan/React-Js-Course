import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency] || {});
      } catch (err) {
        console.error("Error fetching currency info:", err);
        setError("Failed to fetch data");
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;