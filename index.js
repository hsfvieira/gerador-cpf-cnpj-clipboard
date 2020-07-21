import writeClipboard from './clipboard.js'

import cpf from './cpf.js'

const docs = {
    cpf
}

const argDoc = Deno.args[0]

writeClipboard(docs[argDoc]())