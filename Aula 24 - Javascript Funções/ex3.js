const io = require('../io/io')

/* Faça um programa de computador para calcular o volume de uma esfera. Ele
deverá conter uma uma função que recebe por parâmetro o raio de uma esfera e
calcula o seu volume (v = 4/3.Pi.R3). Considere o valor de Pi = 3.14 */

function calcularVolumeEsfera(r) {
    const resultado = (4 / 3) * 3.14 * (r ** 3)
    return resultado
}

io.write('--- Cálculo do volume de uma esfera ---')
io.write('Escreva o valor do raio:')
const raio = io.readFloat()
const volume = calcularVolumeEsfera(raio)
io.write(`O volume dessa esfera é ${volume}`)