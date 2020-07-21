import writeClipboard from './src/clipboard.js'

import cpf from './src/cpf.js'

const docs = {
    cpf
}

const argTypeDoc = Deno.args[0]

writeClipboard(docs[argTypeDoc]())