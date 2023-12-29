const io = require('../io/io')

io.write('Informe o primeiro número: ')
let num1 = io.readInt()

io.write('Informe o segundo número:')
let num2 = io.readInt()

if(num1 + num2 > 10) {
    io.write(`A soma de ${num1} e ${num2} é maior que 10`)
} else {
    io.write(`A soma entre os números é menor que 10`)
}