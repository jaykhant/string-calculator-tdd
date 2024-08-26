const calculator = (input) => {
    if (input === '') return 0

    const delimiters = [',', '\n']

    const numbers = input.split(new RegExp(`[${delimiters.join('')}]`))

    return numbers.reduce((sum, number) => sum + parseInt(number), 0)
}

module.exports = calculator