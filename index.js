import writeClipboard from './src/clipboard.js'

import cpf from './src/cpf.js'
import cnpj from './src/cnpj.js'
import rg from './src/rg.js'

const docs = {
    cpf,
    cnpj,
    rg
}

const argTypeDoc = Deno.args[0]

writeClipboard(docs[argTypeDoc]())