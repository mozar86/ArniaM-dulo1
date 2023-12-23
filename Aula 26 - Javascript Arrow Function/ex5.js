const io = require('../io/io')

const soma = (n1, n2) => n1 + n2

const calculo = (fnSoma) => {
    io.write('Informe o 1º número')
    const numero1 = io.readInt()
    io.write('Informe o 2º número')
    const numero2 = io.readInt()

    const resultado = fnSoma(numero1, numero2)

    io.write(resultado)
}

calculo(soma)