import React, { useState, useEffect } from 'react';
// import './QuoteDisplay.css';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'computers';
  const apiKey = 'dZB1jc2cSzXdURZ2PHCOdA==2ejjLjTFQHM1u8lb';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]?.quote);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="quote-display loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="quote-display error">
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <h2 className="quote-title">Quote of the Day</h2>
      <p className="quote-text">
        &quot;
        {quote}
        &quot;
      </p>
    </div>
  );
};

export default QuoteDisplay;
