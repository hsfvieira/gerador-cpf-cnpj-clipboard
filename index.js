import writeClipboard from './src/clipboard.js'

import cpf from './src/cpf.js'
import cnpj from './src/cnpj.js'

const docs = {
    cpf,
    cnpj
}

const argTypeDoc = Deno.args[0]

writeClipboard(docs[argTypeDoc]())