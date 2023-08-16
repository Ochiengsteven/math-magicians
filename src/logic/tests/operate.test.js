import operate from '../operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, '*')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate(6, 2, '/')).toBe('3');
  });

  it('handles division by zero', () => {
    expect(operate(6, 0, '/')).toBe("Can't divide by 0.");
  });
});
