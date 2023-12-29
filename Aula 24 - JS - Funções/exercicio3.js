const io = require('../io/io')

/* Escreva uma função que recebe, por parâmetro, dois valores X e Z e
calcula e retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos) */

function potencia(x, Z) { // recebe parâmetros
    io.write('Defina x:') // recebe dado
    x = io.readInt() // salva dado na variável x
    io.write('Defina z') // recebe dado
    Z = io.readInt() // salva dado na variável z
    return x ** Z // retorna x²
}

io.write(`O resultado é ${potencia()}`) // chama a function imprimindo o resultado