const io = require('../io/io')

/* Faça um programa que receba 10 números e depois do recebimento de todos os números mostre cada um concatenando com a palavra Número: antes
1, 2, 3, 4
Número: 1
Número: 2
Número: 3
 */

const array = []

for(let i = 0; i < 5; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.read()
    array.push(numero)
}

io.write(array)

for (let i = 0; i < array.length; i++) {// 0 - 1 - 2 - 3 - 4
    io.write(`Número: ${array[i]}`)// array[0] - array[1] - array[2] - array[3] - array[4]
}