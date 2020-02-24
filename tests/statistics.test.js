const Statistics = require('../functions/Statistics');
let Stats = new Statistics();
let array = [1,2,3,4];

test('Variance of 6 and 2 equals 4', () => {
    expect(Stats.Variance(6, 2)).toBe(4);
    expect(Stats.result).toBe(4);
});

test('Mean of array equals 2.5', () => {
    expect(Stats.Mean(array)).toBe(2.5);
    expect(Stats.result).toBe(2.5);
});
