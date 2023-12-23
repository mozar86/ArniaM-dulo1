const io = require('../io/io')

io.write('Informe um número maior que 10: ')
const numero = io.readInt()

if (numero > 10) {
    io.write('Número recebido com sucesso!')
} else {
    io.write('O número informado é inválido!')
}