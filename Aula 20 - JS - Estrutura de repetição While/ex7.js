const io = require('../io/io')

/* Faça um programa de computador que passe por todos os números naturais menores que 100 e escreva os que forem pares */

let iterador = 0

while (iterador < 100) {
    if (iterador % 2 === 0) {
        io.write(`O número ${iterador} é par`)
    }
    iterador++
}