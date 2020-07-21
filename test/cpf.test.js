import cpf, { calculateFirst, calculateSecond } from '../src/cpf.js'

Deno.test(
    'Gerar número de CPF',
    () => {
        const numeroCpf = cpf()
        if(numeroCpf.length != 11) {
            throw 'Número do CPF não tem a quantidade correta de dígitos'
        }
    }
)

Deno.test(
    'Calcular dígito verificador do CPF',
    () => {
        const numeroCpf = '997614612'
        const digitoVerificador1 = calculateFirst(numeroCpf)
        const digitoVerificador2 = calculateSecond(numeroCpf + digitoVerificador1.toString())
        if(digitoVerificador1 != 4) {
            throw 'Calculo do primeiro dígito verificador do CPF não confere'
        }
        if(digitoVerificador2 != 6) {
            throw 'Calculo do segundo dígito verificador do CPF não confere'
        }
    }
)