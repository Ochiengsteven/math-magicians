import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import CalculatorButton from './calculatorButton';

export default function Calculator() {
  const buttonData = [
    ['AC', false], ['+/-', false], ['%', false], ['/'],
    ['7'], ['8'], ['9'], ['*'],
    ['4'], ['5'], ['6'], ['-'],
    ['1'], ['2'], ['3'], ['+'],
    ['0', true], ['.', false], ['=', false],
  ];

  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // Click event handler for calculator buttons
  const handleButtonClick = (buttonName) => {
    console.log('Button clicked!');
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div className="calculator">
      <div className="output-screen">
        {calculatorData.next || calculatorData.total || '0'}
      </div>
      <div className="button-grid">
        {buttonData.map((button) => (
          <CalculatorButton
            key={button[0]}
            label={button[0]}
            isDoubleWidth={button[1]}
            isLastInRow={button[0] === '/' || button[0] === '*' || button[0] === '-' || button[0] === '+' || button[0] === '='}
            onClick={() => handleButtonClick(button[0])}
          />
        ))}
      </div>
    </div>
  );
}
