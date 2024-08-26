const calculator = require('./calculator');

test('should return 0 for an empty string', () => {
    expect(calculator('')).toBe(0)
})