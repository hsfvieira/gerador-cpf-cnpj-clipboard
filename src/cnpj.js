import { generateDigites } from './util.js'

export default function generateCnpj() {
    const cnpjDigites = generateDigites(12)
    const firstDig = calculateFirst(cnpjDigites)
    const secondDig = calculateSecond(cnpjDigites + firstDig.toString())
    return cnpjDigites + firstDig.toString() + secondDig.toString()
}

function calculateFirst(cnpjDigites) {
    const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const listDigites = cnpjDigites.split('')

    const calc = listDigites.reduce((acc, value, index) => {
        return acc + (value * weights[index])
    }, 0)

    return calc % 11 < 2 ? 0 : 11 - (calc % 11)
}

function calculateSecond(cnpjDigites) {
    const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const listDigites = cnpjDigites.split('')

    const calc = listDigites.reduce((acc, value, index) => {
        return acc + (value * weights[index])
    }, 0)

    return calc % 11 < 2 ? 0 : 11 - (calc % 11)
}