const io = require("../io/io")

/* Faça um programa para escrever de 1 a 'n', sendo n fornecido pelo usuário */

io.write('Digite um número:')
let numero = io.readInt()

for (let i = 1; i <= numero; i++) {
    io.write(i)
}