const io = require('../io/io')

/* Escreva uma função que recebe como parâmetro um array de números. Dado este array, a função deverá:
a. Deixar no array somente os números ímpares (utilize filter)
b. Somar todos os números restantes (utilize reduce)
c. Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x a soma dos números restantes do array */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const recebeNumeros = (numeros) => {
    const numImpar = numeros.filter((item) => item % 2 !== 0)
    io.write(numImpar)

    io.write('--------------------------')

    const numRestantes = numeros.reduce((acumulador, restante) => acumulador + restante)
    io.write(numRestantes)

    io.write('---------------------------')

    for (let i = 0; i < numeros.length; i++) {
        io.write('Javascript é muito bom')
    }
}

recebeNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])