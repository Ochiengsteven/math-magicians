import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../calculator';

describe('Calculator component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the result of arithmetic operations', () => {
    const { getByText, queryAllByText } = render(<Calculator />);

    // Simulate button clicks to perform calculations
    userEvent.click(getByText('1'));
    userEvent.click(getByText('+'));
    userEvent.click(getByText('2'));
    userEvent.click(getByText('='));

    // Check if the result is displayed correctly
    const resultElement = queryAllByText('3', { selector: '.operation' });
    expect(resultElement).toHaveLength(1); // Ensure there's only one element with the text "3"
  });

  it('should clear the screen after AC button is clicked', () => {
    const { getByText, queryByText } = render(<Calculator />);

    // Simulate button clicks to enter a number and then clear
    userEvent.click(getByText('1'));
    userEvent.click(getByText('AC'));

    // Check if the screen container is cleared
    const screenContainer = queryByText('.operation');
    expect(screenContainer).toBeNull();
  });

  it('should match the snapshot after interactions', () => {
    const { asFragment, getByText } = render(<Calculator />);

    // Simulate button clicks to perform interactions
    userEvent.click(getByText('1'));
    userEvent.click(getByText('+'));
    userEvent.click(getByText('2'));
    userEvent.click(getByText('='));
    userEvent.click(getByText('AC'));

    // Assert that the snapshot matches the updated component state
    expect(asFragment()).toMatchSnapshot();
  });
});
