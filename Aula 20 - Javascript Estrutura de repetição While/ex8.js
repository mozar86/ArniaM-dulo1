const io = require('../io/io')

/* Faça um programa de computador para calcular a soma dos naturais de 1 a 100 */

let iterador = 1
let soma = 0

while (iterador <= 10) {
    io.write(`O valor do iterador atual é ${iterador}`)
    soma = soma + iterador
    io.write(`O valor de soma atual é ${soma}`)
    iterador++
    io.write(`------------------`)
}
