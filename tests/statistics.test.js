const Statistics = require('../functions/Statistics');
let Stats = new Statistics();

test('Variance of 6 and 2 equals 4', () => {
    expect(Stats.Variance(6, 2)).toBe(4);
    expect(Stats.result).toBe(4);
});