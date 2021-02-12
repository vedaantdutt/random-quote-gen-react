import React, { useState } from "react";

import quotes from "./data/quotes";

function Quote() {

  // Return the quote and author
  return (
    <div className="quote-box">
      <p className="quote-text"></p>
     
      <p className="quote-author"></p>
      <button>Generate Quote</button>
    </div>
  );
}

// Export the Quote component
export default Quote;
