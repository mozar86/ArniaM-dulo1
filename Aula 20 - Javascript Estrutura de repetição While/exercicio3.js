const io = require('../io/io')

//Faça um programa para imprimir os números pares menores que 100.

let contador = 0

while (contador < 100) {
    if (contador % 2 === 0) {
        io.write(contador)
    }
    contador++
}
