import cnpj, { calculateFirst, calculateSecond } from '../src/cnpj.js'

Deno.test(
    'Gerar número de CNPJ',
    () => {
        const numeroCnpj = cnpj()
        if(numeroCnpj.length != 14) {
            throw 'Número do CNPJ não tem a quantidade correta de dígitos'
        }
    }
)

Deno.test(
    'Calcular dígito verificador do CNPJ',
    () => {
        const numeroCnpj = '829833851217'
        const digitoVerificador1 = calculateFirst(numeroCnpj)
        const digitoVerificador2 = calculateSecond(numeroCnpj + digitoVerificador1.toString())
        if(digitoVerificador1 != 6) {
            throw 'Calculo do primeiro dígito verificador do CNPJ não confere'
        }
        if(digitoVerificador2 != 5) {
            throw 'Calculo do segundo dígito verificador do CNPJ não confere'
        }
    }
)