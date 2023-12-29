const io = require('../io/io')

/* Faça um programa que receba um número e use uma função para calcular e mostrar este número x2 */
function calcularDobro(teste) {
    const resultado = teste * 2
    io.write(`O resultado é ${resultado}`)
}


io.write('Digite um número:')
const numero = io.readInt()
calcularDobro(numero)