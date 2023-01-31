
// App.js

import React, { useState, useEffect } from "react";
import { scrapePrices } from "./scraper";

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const prices = await scrapePrices();
      setPrices(prices);
    }
    
    fetchData();
  }, []);

  return (
    // Render the prices data in your UI
    <div>
      {prices.map((price, i) => (
        <p key={i}>${price}</p>
      ))}
    </div>
  );
}

export default App;