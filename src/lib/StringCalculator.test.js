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
  
  test('supports custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  
  test('throws an exception for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });
  
  test('tracks how many times add has been called', () => {
    calculator.add("1,2");
    calculator.add("3,4");
    expect(calculator.getCalledCount()).toBe(2);
  });
  
  test('ignores numbers greater than 1000', () => {
    expect(calculator.add("2,1001,3")).toBe(5);
  });
  
});
