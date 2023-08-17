import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './components/Home';
import Calculator from './components/calculator';
import QuoteDisplay from './components/QuoteDisplay';

export default function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}
