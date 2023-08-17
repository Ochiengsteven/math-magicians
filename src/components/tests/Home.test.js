import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
