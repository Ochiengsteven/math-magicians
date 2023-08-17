import operate from '../operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toMatchSnapshot();
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toMatchSnapshot();
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, '*')).toMatchSnapshot();
  });

  it('divides two numbers', () => {
    expect(operate(6, 2, '/')).toMatchSnapshot();
  });

  it('handles division by zero', () => {
    expect(operate(6, 0, '/')).toMatchSnapshot();
  });

  it('calculates modulus', () => {
    expect(operate(7, 3, '%')).toMatchSnapshot();
  });

  it('handles modulo by zero', () => {
    expect(operate(7, 0, '%')).toMatchSnapshot();
  });

  it('throws error for unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrowErrorMatchingSnapshot();
  });
});
