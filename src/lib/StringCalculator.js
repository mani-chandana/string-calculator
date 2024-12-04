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

        const parts = numbers.split(delimiter).map(num => parseInt(num, 10));
        const negatives = parts.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, num) => sum + num, 0);
    }

    getCalledCount() {
        return this.callCount;
    }
}

