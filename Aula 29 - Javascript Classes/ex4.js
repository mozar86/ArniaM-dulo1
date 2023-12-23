const io = require('../io/io')

class Pessoa {
    id
    nome 
    cpf
    dataNascimento
}

let pessoas = []

io.write('Cadastro de pessoas')

for(let i = 0; i < 3; i++) {
    io.write(`Informe o ${i + 1} ID:`)
    const id = io.readInt()
    io.write(`Informe o ${i + 1} nome:`)
    const nome = io.read()

    const pessoa = new Pessoa()
    pessoa.id = id
    pessoa.nome = nome

    pessoas.push(pessoa)
}

pessoas.forEach(pessoa => {
    io.write(`${pessoa.id} ${pessoa.nome}`)
})
