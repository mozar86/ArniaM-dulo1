const io = require('../io/io')

/* Receba um número e informe se ele é maior ou diferente de 10 */

io.write('Informe um número: ')
const numero = io.readInt()
let resultado = ''

if (numero === 10) {
    //io.write('O número é igual a 10')
    resultado = 'O número é igual a 10'
} else {
    resultado ='O resultado é diferente de 10'
}

io.write(resultado)