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

  it('calculates modulo', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  it('handles modulo by zero', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws error for unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
