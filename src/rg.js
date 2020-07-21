import { generateDigites } from './util.js'

export default function generateCpf() {
    const rgDigites = generateDigites(8)
    const firstDig = calculateFirst(rgDigites)
    return rgDigites + firstDig.toString()
}

export function calculateFirst(rgDigites) {
    const weights = [2, 3, 4, 5, 6, 7, 8, 9]
    const listDigites = rgDigites.split('')

    const calc = listDigites.reduce((acc, value, index) => {
        return acc + (value * weights[index])
    }, 0)

    return calc % 11 < 2 ? 0 : 11 - (calc % 11)
}