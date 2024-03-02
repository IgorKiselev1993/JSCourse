function getMaxValue<T extends { value: number } | number | string>(arr: T[]): T | null {
    if (arr.length === 0) return null;
    return arr.reduce((max, current) => (current > max ? current : max));
}

const numbers = [5, 2, 8, 10];
const strings = ['apple', 'banana', 'orange'];
const objects = [{ value: 20 }, { value: 15 }, { value: 25 }];
