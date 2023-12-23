const io = require('../io/io')

/* Faça um programa para escrever seu nome n vezes, sendo n fornecido pelo usuário */

io.write('Digite a quantidade de vezes:')
let qtdNome = io.readInt()

for (let i = 1; i <= qtdNome; i++) {
    io.write('Mozar')
}