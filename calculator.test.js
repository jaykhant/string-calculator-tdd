const calculator = require('./calculator');

test('should return 0 for an empty string', () => {
    expect(calculator('')).toBe(0)
})

test('should return the number itself if there is only one number', () => {
    expect(calculator('5')).toBe(5)
})

test('should return the sum of two numbers', () => {
    expect(calculator('1,2')).toBe(3)
})

test('should return the sum of multiple numbers', () => {
    expect(calculator('1,2,3,4')).toBe(10)
})

test('should return the sum of numbers with new line as delimiter', () => {
    expect(calculator('1\n2,3')).toBe(6)
})

test('should return the sum of numbers with custom delimiter', () => {
    expect(calculator('//;\n1;2')).toBe(3)
})

test('should throw an exception when negative numbers are used', () => {
    expect(() => calculator('1,-2')).toThrow('Negatives not allowed: -2')
})

test('should ignore numbers greater than 1000', () => {
    expect(calculator('1,2,1001')).toBe(3)
})