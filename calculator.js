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

    return numbers.reduce((sum, number) => sum + parseInt(number), 0)
}

module.exports = calculator