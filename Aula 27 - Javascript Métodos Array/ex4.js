const io = require('../io/io')

const nomes = ['Maria', 'Fulano', 'Teste', 'Karina', 'Maria']

const marias = []

/*for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === 'Maria') {
        marias.push(nomes[i])
    }
}

io.write(marias) */

const nomesMarias = nomes.filter((item) => item === 'Maria')

console.log(nomesMarias)