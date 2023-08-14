import React, { useState, useEffect } from 'react';
import './QuoteDisplay.css'; // Import your CSS file for styling

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null); // Define author state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'men';
  const apiKey = 'dZB1jc2cSzXdURZ2PHCOdA==2ejjLjTFQHM1u8lb';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        const firstQuote = data[0];
        setQuote(firstQuote?.quote);
        setAuthor(firstQuote?.author); // Set the author from API response
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
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <p className="quote-text">
        &quot;
        {quote}
        &quot;
      </p>
      <p className="author-text">
        -
        {author}
      </p>
    </div>
  );
};

export default QuoteDisplay;
