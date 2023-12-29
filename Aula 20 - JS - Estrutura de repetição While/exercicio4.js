const io = require('../io/io')

/*Faça um programa para imprimir os múltiplos de 5 menores ou igual
a n, sendo n fornecido pelos usuários.*/

io.write('Digite um número: ') // Número solicitado ao usuário
let numero =  io.readInt() // Leitura do número fornecido pelo usuário

let contador = 1 // Iterador do loop

while (contador <= numero) { // Enquanto o contador for menor ou igual ao número do usuário, faça:
    if (contador % 5 === 0) { // Se contador dividido por 5 tiver resto 0, faça: 
        io.write(contador) // Escreva o conteúdo da variável contador
    }
    contador++ // Incremente o contador
}

