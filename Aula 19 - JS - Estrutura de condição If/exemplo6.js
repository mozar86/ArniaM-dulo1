const io = require('../io/io')

/*Faça um programa que solicite ao usuário um npumero entre 1 e 100. Se ele informar um npumero dentro das condições retorne "Número válido" se não, retorne "Número inválido"*/

io.write('Informe um número: ')
const numero = io.readInt()

if (numero >= 1 && numero <= 100) {
    io.write('Número válido')
} else {
    io.write('Número inválido')
}