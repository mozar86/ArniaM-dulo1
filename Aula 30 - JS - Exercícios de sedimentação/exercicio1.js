const io = require('../io/io')

/* Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os valores do array utilizando a função reduce. */

let numeros = [1,2,3,4,5]

const somarValores = (numeros) => { // Função que soma os valores do array números
    const soma = numeros.reduce((valorInicial, valorAtual) => { // Salva na variável soma, o resultado do método reduce
        return valorInicial + valorAtual // Retorna o cálculo do numeros.reduce
    },0)
    return soma // Retorna o resultado na variável soma
}


const resultado = somarValores(numeros)
io.write(resultado)