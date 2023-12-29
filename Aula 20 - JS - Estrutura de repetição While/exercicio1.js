const io = require('../io/io')

let contador = 0 // Contador inicial de repetições zerado

io.write('Qual o número de repetições ') // Entrada que informa o número de repetiçoes solicitadas pelo usuário
    let numero_de_vezes = io.readInt() // Leitura do dado que será repetido
io.write('Digite uma frase: ') // Dado de entrada que será repetido
    const frase = io.read() // Leitura do dado que será repetido

while(contador < numero_de_vezes) { // Enquanto o contador for menor que o número de vezes informado pelo usuário, faça:
    io.write(frase) // Ação repetida pelo enquanto até o número de vezes for alcançado
    contador++ // Incremento para que a repetição some mais uma ação até chegar ao número de vezes informado pelo usuário
}


