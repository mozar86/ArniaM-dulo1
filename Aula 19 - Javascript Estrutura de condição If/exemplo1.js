const io = require('..io/io')

/* Faça um programa de computador que recebe do usuário um npumero interio e acuse se este número é par ou ímpar */

io.write('Informe o número:')
const numero = io.readInt()
const resto = numero % 2 // numero "mod" 2

if (resto === 0) { //Se resto for igual à 0
    io.write('Este número é par!')
}

if (resto !== 0) { //Se resto for diferente de 0
    io.write('Este número é ímpar')
}