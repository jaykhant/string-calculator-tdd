const calculator = require('./calculator');

test('nothing', () => {
    expect(calculator()).toBe(null);
});