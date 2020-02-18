const addition = require('../functions/sum');
array = [1, 2, 3, 4, 5];

test('adds 1 + 2 to equal 3', () => {
    expect(addition.sum(1, 2)).toBe(3);
});

test('add 1,2,3,4,5 to equal 15', () => {
    expect(addition.sum(array)).toBe(15);
});