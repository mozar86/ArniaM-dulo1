const io = require('../io/io')

/* Escreva uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada número do array e retornar um novo array com os valores resultantes. */

let numeros = [1,2,3,4,5]

const dobrarNumeros = (numeros, fnDobrar) => { // Função recebendo o array numeros e a função fnDobrar 
    return numeros.map(numero => fnDobrar(numero)) // Função dobrarNumeros retorna o método map no array numeros, que devido a arrow function, irá criar um novo array, e como recebe a função fnDobrar, este novo array terá os números que são o dobro dos números do array numero.
}

const dobrar = num => num * 2 // Função dobrar irá dobrar cada número que consta no array numeros

const resultado = dobrarNumeros(numeros, dobrar) // Variável resultado recebe a função dobrarNumeros com os parâmetros sendo o array numeros e a função dobrar
io.write(resultado) // Imprimir a variável resultado


