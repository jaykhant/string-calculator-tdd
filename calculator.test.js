const calculator = require('./calculator');

test('should return 0 for an empty string', () => {
    expect(calculator('')).toBe(0)
})

test('should return the number itself if there is only one number', () => {
    expect(calculator('5')).toBe(5)
})