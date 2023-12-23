const io = require('../io/io')

/* Faça um programa de computador para receber 10 números inteiros e depois imprimir seus sucessores */



const numeros = []
for (let i = 0; i < 10; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    let numero = io.readInt()
    numeros.push(numero)
}

io.write('Os sucessores dos números digitados são:')
for (let i = 0; i < numeros.length; i++) {
    io.write(numeros[i++])
}
