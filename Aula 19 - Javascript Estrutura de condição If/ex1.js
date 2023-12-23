const io = require('../io/io')

io.write('Informe o primeiro número:')
const num1 = io.readInt()

io.write('Informe o segundo número:')
const num2 = io.readInt()

if (num1 > num2) {
    io.write (`O número ${num1} é maior`)
} else {
    io.write (`O número ${num2} é maior`)
}