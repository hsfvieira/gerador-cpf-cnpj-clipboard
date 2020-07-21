import { generateDigites } from '../src/util.js'

Deno.test(
    'Gerando números aleatórios com uma quantidade determinada', 
    () => {
        const qtd = 9
        const numero = generateDigites(qtd)
        if(numero.length != qtd) {
            throw 'Quantidade passada é diferente do retorno'
        }
    }
)