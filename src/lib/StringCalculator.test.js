import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('returns the number itself for a single input', () => {
    expect(calculator.add("1")).toBe(1);
  });
  
  test('returns the sum of two numbers separated by a comma', () => {
    expect(calculator.add("1,2")).toBe(3);
  });
  
  test('handles new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  
});
