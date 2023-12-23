const io = require('../io/io')

let pessoas = []

pessoas.push('Mozar')
pessoas.push('Letícia')
pessoas.push('Vitória')

io.write(pessoas)

/*for (let index = 0; index < pessoas.length; index++) {
    const pessoa = pessoas[index];
    io.write(pessoa)
}
*/
