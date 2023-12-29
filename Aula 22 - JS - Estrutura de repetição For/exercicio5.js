const io = require("../io/io")

/* Faça um programa para imprimir os números pares menores que um número fornecido pelo usuário */

io.write('Digite um número:')
var numero = io.readInt()

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        io.write(i)
    }
}