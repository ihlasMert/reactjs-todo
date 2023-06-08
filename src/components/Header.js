import React, { useState, useEffect } from "react";

function Header() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        // Randomly select a quote from the response data
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;

        setQuote(randomQuote);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Inspirational Quote:</h1>
      <p>{quote}</p>
    </div>
  );
}

export default Header;
