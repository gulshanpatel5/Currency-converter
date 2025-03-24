import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/2a5dcf70276c2aefaea383e0/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates)) // Corrected to access conversion_rates
      .catch((error) => console.error("Error fetching currency data:", error)); // Added error handling
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyinfo;
