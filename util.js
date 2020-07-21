function generateOneDigite(minorThan) {
    return Math.floor(Math.random() * minorThan)
}

export function generateDigites(qtd, number='') {
    if(qtd == number.length) {
        return number
    }
    const newDig = generateOneDigite(10)
    const newNumber = number + newDig.toString()
    return generateDigites(qtd, newNumber)
}