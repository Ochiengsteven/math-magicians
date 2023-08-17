import React from 'react';
import { render } from '@testing-library/react';
import CalculatorButton from '../calculatorButton'; // Adjust the import path if needed

describe('CalculatorButton', () => {
  it('should render correctly', () => {
    const { container } = render(<CalculatorButton label="1" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with double width', () => {
    const { container } = render(<CalculatorButton label="0" isDoubleWidth />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render as last button in row', () => {
    const { container } = render(<CalculatorButton label="+" isLastInRow />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
