const io = require('../io/io')

/* Faça um programa para calcular a média de 3 notas de um aluno */

function calcularMedia(n1, n2, n3, tipoMedia) {
    if (tipoMedia === 'A') {
        const mediaAritimetica = (n1 + n2 + n3) / 3
        io.write(`Média de notas: ${mediaAritimetica}`)
    } else if (tipo === 'P') {
        const mediaPonderada = ((n1 * 5) + (n2 * 2) + (n3 * 2)) / 10
        io.write(`Média ponderada: ${mediaPonderada}`)
    } else {
        io.write('Informe o tipo corretamente.')
    }
}

io.write('Informe a nota 1')
const nota1 = io.readFloat()
io.write('Informe a nota 2')
const nota2 = io.readFloat()
io.write('Informe a nota 3')
const nota3 = io.readFloat()
io.write('Tipo de média:')
const tipo = io.read()
calcularMedia(nota1, nota2, nota3, tipo)



