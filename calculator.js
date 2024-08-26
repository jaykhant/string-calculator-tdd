const calculator = (input) => {
    if (input === '') return 0

    const delimiters = [',', '\n']

    if (input.startsWith('//')) {
        const delimiterEndIndex = input.indexOf('\n')
        const customDelimiter = input.substring(2, delimiterEndIndex)
        delimiters.push(customDelimiter)
        input = input.substring(delimiterEndIndex + 1)
    }

    const numbers = input.split(new RegExp(`[${delimiters.join('')}]`))

    const negatives = numbers.filter(number => number < 0)
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`)
    }

    return numbers.filter(number => parseInt(number) <= 1000).reduce((sum, number) => sum + parseInt(number), 0)
}

module.exports = calculator