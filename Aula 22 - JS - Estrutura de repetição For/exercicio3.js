const io = require('../io/io')

/* Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam "Maria" */

let quantidade = 0

for (let i = 1; i <= 10; i++) {
    io.write('Digite um nome de pessoa:')
    const nome = io.read()

    if (nome === 'Maria') {
        quantidade++
    }
}

io.write(`O nome maria foi escrito ${quantidade} vezes`)