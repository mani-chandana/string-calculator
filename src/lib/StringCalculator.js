export class StringCalculator {
    constructor() {
        this.callCount = 0;
    }

    add(numbers) {
        this.callCount++;
        if (!numbers) return 0;

        let delimiter = /,|\n/; // Default delimiters: comma and newline

        if (numbers.startsWith("//[")) {
            // Handle single or multiple custom delimiters enclosed in square brackets
            const delimiterEnd = numbers.indexOf('\n');
            const delimiterSection = numbers.substring(2, delimiterEnd); // Extract delimiter section
            const customDelimiters = delimiterSection.match(/\[([^\]]+)\]/g)?.map(d => d.slice(1, -1)) || [];

            // Construct a regex to match all custom delimiters
            const joinedDelimiters = customDelimiters
                .map(d => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')) // Escape special characters
                .join('|');
            delimiter = new RegExp(joinedDelimiters); // Update delimiter with custom delimiters regex

            numbers = numbers.substring(delimiterEnd + 1); // Remove the delimiter declaration section
        } else if (numbers.startsWith("//")) {
            // Handle single custom delimiter
            const parts = numbers.split('\n');
            delimiter = new RegExp(parts[0].substring(2)); // Extract the single delimiter
            numbers = parts[1];
        }

        // Split numbers, handle negatives, and calculate the sum
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
