const io = require('../io/io')

/* Crie um programa que receba 2 números e use uma função para calcular a soma destes números */

//função de notação tradicional
function somarNumeros(n1, n2) {//escopo fechado!
    const somaDosNumeros = n1 +n2

    return somaDosNumeros
}



io.write('---Soma de 2 números---')
io.write('Informe o 1º número: ')
const numero1 = io.readInt()
io.write('Informe o 2º número: ')
const numero2 = io.readInt()
const soma = somarNumeros(numero1, numero2)
io.write(`A soma dos números é ${soma}`)
//const soma = numero1 + numero2

//io.write('A soma dos números é: ' + soma)