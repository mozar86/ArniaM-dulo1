const io = require('../io/io')

// 1. Receba do usuário 20 números
// 2. Imprima a média aritmética desses números

let contador = 1 // Iterador do loop
let soma = 0
 while (contador <= 5) { // Enquanto o contador for menor ou igual a 5, faça:
    io.write(`Digite o número:`) // Número recebe numero do usuário
    let numero = io.readInt() // Leitura do número do usuário
     soma += numero // Soma recebe incremento da variável número
     contador++ // Incremento do contador
 }
 
 var media = soma / 5 // Variável média recebe soma e divide por 5
 io.write(`A média é ${media}`) // Escreva a média