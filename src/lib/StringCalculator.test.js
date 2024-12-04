import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });
});
