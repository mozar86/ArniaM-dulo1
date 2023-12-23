const io = require('../io/io')

/* Faça uma função que recebe a idade de uma pessoa em anos, meses e
dias e retorna essa idade expressa em dias. */


function idadeDias() {
    io.write('Quantos anos você tem?')
    let anos = io.readInt()
    io.write('Quantos meses?')
    let meses = io.readInt()
    io.write('Quantos dias?')
    let dias = io.readInt()

    let anosEmDias = anos * 365
    let mesesEmDias = meses * 30

    return anosEmDias + mesesEmDias + dias
}

let minhaIdade = idadeDias()
io.write(`Minha idade é ${minhaIdade}`)

