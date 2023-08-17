import React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from '../QuoteDisplay';

describe('QuoteDisplay component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<QuoteDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
