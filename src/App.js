import React from 'react';
import Calculator from './components/calculator';
import QuoteDisplay from './components/QuoteDisplay';

export default function App() {
  return (
    <div className="app">
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}
