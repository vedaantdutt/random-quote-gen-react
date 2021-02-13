import React, { useState } from "react";

import quotes from "./data/quotes";

function Quote() {

  // Initialize the quote state with the first quote 
  const [quote, setQuote] = useState(quotes[0]);

  // Function to generate a new quote
  const generateQuoteButton = () => {
    const lengthQuotes=quotes.length;
    const randomIndex = Math.floor(Math.random() * lengthQuotes);
    setQuote(quotes[randomIndex]);
  };

  // Return the quote and author
  return (
    <div className="quote-box">
      <p className="quote-text">"{quote.quote}"</p>
     
      <p className="quote-author">- by {quote.author}</p>
      <button onClick={generateQuoteButton}>Generate Quote</button>
    </div>
  );
}

// Export the Quote component
export default Quote;
