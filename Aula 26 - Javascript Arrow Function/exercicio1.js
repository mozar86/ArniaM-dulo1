const io = require('../io/io')

/* Faça um programa que receba do usuário um array de números.
Implemente uma função que recebe o array de números e retorna um outro array que contém somente os números pares. */


const seletorPares = (numeros) => { // Arrow function para selecionar os números pares do array numeros
    let numerosPares = [] // Array criado para receber os números pares

    for (let i = 0; i < numeros.length; i++) { // Loop para percorrer o array numeros e testar:
        if (numeros[i] % 2 === 0) { // Se o array numeros na posição i dividido por 2 for igual a 0, faça:
            numerosPares.push(numeros[i]) // Lançar o item i do array numeros no array numerosPares
        }
    }
    return numerosPares // retornar o array numerosPares para não perdê-lo
}

let numeros = [] // Array para receber números do usuário
let quantidade = 10

for (let i = 0; i < quantidade; i++) { // Loop para percorrer o array numeros enquanto i for menor que 10
    io.write(`Digite o ${i + 1}º número:`) // Pede dado ao usuário
    let numero = io.readInt() // Salva o dado na variável numero
    numeros.push(numero) // Lança o dado salvo na variável numero para o array numeros
}

const pares = seletorPares(numeros) // Chamar a função seletorPares usando como parâmetro o array numeros, salvando-a numa variável
io.write(pares) // Imprimir a variável





