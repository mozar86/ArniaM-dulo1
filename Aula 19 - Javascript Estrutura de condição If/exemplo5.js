const io = require('../io/io')

/* Faça um programa que receba o nome de um país e se o país for [Brasil] ou [Portugal] mostre a mensagem: "Este país fala português" */

io.write('Informe o país: ')
const pais = io.read()

if (pais === "Brasil" || pais === 'Portugal') {
    io.write('Este país fala português')
}