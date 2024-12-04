export class StringCalculator {
    constructor() {
        this.callCount = 0;
    }

    add(numbers) {
        this.callCount++;
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split('\n');
            delimiter = new RegExp(parts[0].substring(2));
            numbers = parts[1];
        }
        else if (numbers.startsWith("//[")) {
            const delimiterEnd = numbers.indexOf("]\n");
            const customDelimiter = numbers.substring(3, delimiterEnd);
            delimiter = new RegExp(`${customDelimiter}|,|\\n`);
            numbers = numbers.substring(delimiterEnd + 2);
        }

        const parts = numbers.split(delimiter).map(num => parseInt(num, 10));
        const negatives = parts.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }

    getCalledCount() {
        return this.callCount;
    }
}

