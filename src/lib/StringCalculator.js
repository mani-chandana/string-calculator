export class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;
  
      const parts = numbers.split(',').map(num => parseInt(num, 10));
      return parts.reduce((sum, num) => sum + num, 0);
    }
  }
  