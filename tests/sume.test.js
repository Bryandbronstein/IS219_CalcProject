const addition = require('../functions/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(addition.sum(1, 2)).toBe(3);
});