export class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;
  
      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
      }
  
      const parts = numbers.split(delimiter).map(num => parseInt(num, 10));
      return parts.reduce((sum, num) => sum + num, 0);
    }
  }
  