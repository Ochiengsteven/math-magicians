import React from 'react';
import './calculator.css';

export default function Calculator() {
  const buttonData = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="calculator">
      <div className="output-screen">
        0
      </div>
      <div className="button-grid">
        {buttonData.map((button) => (
          <button
            key={button}
            type="button"
            className={`calc-button ${button === '0' ? 'double-width' : ''}`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
