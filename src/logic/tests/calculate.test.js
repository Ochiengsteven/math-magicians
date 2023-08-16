import calculate from '../calculate';
import operate from '../operate';

describe('calculate function', () => {
  it('resets state on AC button press', () => {
    const initialState = {
      total: '123',
      next: '456',
      operation: '+',
    };
    const newState = calculate(initialState, 'AC');

    expect(newState).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('calculates the result on = button press', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const newState = calculate(initialState, '=');

    expect(newState).toEqual({
      total: operate('10', '5', '+'),
      next: null,
      operation: '=',
    });
  });
});
