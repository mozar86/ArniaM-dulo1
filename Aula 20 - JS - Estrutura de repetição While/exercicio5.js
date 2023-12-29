const io = require('../io/io')

/*Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3
- ímpar, .... até n, sendo n fornecido por um usuário.*/

io.write('Digite um número:') // Número solicitado ao usuário
let numero = io.readInt() // Leitura do número

let contador = 1


while(contador <= numero) { // Enquanto o contador não for igual ao número do usuário, faça:
    if (contador % 2 === 1) { // Se o contador dividido por 2 tiver resto 1, faça: 
        io.write(`${contador} - ímpar`) // Escreva o conteúdo da template string
    } else { // Caso contrário...
        io.write(`${contador} - par`) // Escreva o conteúdo da template string
    }
    contador++ // Incremente o número
}