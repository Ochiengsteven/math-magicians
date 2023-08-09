import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

// Child component for rendering individual buttons
const CalculatorButton = ({ label, isDoubleWidth, isLastInRow, onClick }) => (
  <button
    type="button"
    className={`calc-button ${isDoubleWidth ? 'double-width' : ''} ${isLastInRow ? 'operation-button' : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

// Prop type validation for CalculatorButton component
CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  isDoubleWidth: PropTypes.bool,
  isLastInRow: PropTypes.bool,
};

// Default prop values for CalculatorButton component
CalculatorButton.defaultProps = {
  isDoubleWidth: false,
  isLastInRow: false,
};

export default CalculatorButton;
