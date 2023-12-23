const io = require('../io/io')

/* Faça um programa que receba do usuário 3 números e use uma função para calcular e retornar a soma destes */

/* const somaNumeros = (num1, num2, num3) => {
    return num1 + num2 + num3
} */

const somaNumeros = (num1, num2, num3) => num1 + num2 + num3

io.write('Informe o 1º número:')
const numero1 = io.readInt()
io.write('Informe o 2º número:')
const numero2 = io.readInt()
io.write('Informe o 3º número:')
const numero3 = io.readInt()
const soma = somaNumeros(numero1, numero2, numero3)

io.write(`O resultado dessa soma é: ${soma}`)