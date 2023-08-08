import React from 'react';
import './calculator.css';
import CalculatorButton from './calculatorButton';

export default function Calculator() {
  const buttonData = [
    ['AC', false], ['+/-', false], ['%', false], ['/'],
    ['7'], ['8'], ['9'], ['*'],
    ['4'], ['5'], ['6'], ['-'],
    ['1'], ['2'], ['3'], ['+'],
    ['0', true], ['.', false], ['=', false],
  ];

  return (
    <div className="calculator">
      <div className="output-screen">
        0
      </div>
      <div className="button-grid">
        {buttonData.map((button) => (
          <CalculatorButton
            key={button[0]}
            label={button[0]}
            isDoubleWidth={button[1]}
          />
        ))}
      </div>
    </div>
  );
}
