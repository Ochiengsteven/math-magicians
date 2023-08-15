import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import QuoteDisplay from './components/QuoteDisplay';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteDisplay />} />
    </Routes>
  );
}
