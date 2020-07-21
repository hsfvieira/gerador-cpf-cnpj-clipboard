import rg, { calculateFirst } from '../src/rg.js'

Deno.test(
    'Gerar número de RG',
    () => {
        const numeroRg = rg()
        if(numeroRg.length != 9) {
            throw 'Número do RG não tem a quantidade correta de dígitos'
        }
    }
)

Deno.test(
    'Calcular dígito verificador do RG',
    () => {
        const numeroRg = '15786348'
        const digitoVerificador = calculateFirst(numeroRg)
        if(digitoVerificador != 7) {
            throw 'Calculo do dígito verificador do RG não confere'
        }
    }
)