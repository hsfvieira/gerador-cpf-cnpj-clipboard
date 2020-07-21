import { generateDigites } from './util.js'

export default function generateCpf() {
    const cpfDigites = generateDigites(9)
    const firstDig = calculateFirst(cpfDigites)
    const secondDig = calculateSecond(cpfDigites + firstDig.toString())
    return cpfDigites + firstDig.toString() + secondDig.toString()
}

function calculateFirst(cpfDigites) {
    const weights = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    const listDigites = cpfDigites.split('')

    const calc = listDigites.reduce((acc, value, index) => {
        return acc + (value * weights[index])
    }, 0)

    return calc % 11 < 2 ? 0 : 11 - (calc % 11)
}

function calculateSecond(cpfDigites) {
    const weights = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    const listDigites = cpfDigites.split('')

    const calc = listDigites.reduce((acc, value, index) => {
        return acc + (value * weights[index])
    }, 0)

    return calc % 11 < 2 ? 0 : 11 - (calc % 11)
}