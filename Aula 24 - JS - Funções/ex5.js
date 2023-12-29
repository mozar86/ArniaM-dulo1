const io = require('../io/io')

/* Faça um programa de computador para simular uma calculadora. Cabe ao usuário digitar dois valores e um dos operandos a seguir: +, - , *, /). Para cada
operação faça uma função. */

function adicao(n1, n2) {
    return n1 + n2
}
function subtracao(n1, n2) {
    return n1 - n2
}
function multiplicacao(n1, n2) {
    return n1 * n2
}
function divisao(n1, n2) {
    return n1 / n2
}


io.write('Digite o primeiro número:')
n1 = io.readInt()
io.write('Digite o operador:')
let operador = io.read()
io.write('Digite o segundo número:')
n2 = io.readInt()

if (operador === '+') {
    const resultado = adicao(n1, n2)
    io.write(`A soma dos números é ${resultado}`)
} else if (operador === '-') {
   const resultado = subtracao(n1, n2)
    io.write(`A subtração dos números é ${resultado}`)
} else if (operador === '*') {
    const resultado = multiplicacao(n1, n2)
    io.write(`A multiplicação dos números é ${resultado}`)
} else { (operador === '/') 
    const resultado = divisao(n1, n2) 
    io.write(`A subtração dos números é ${resultado}`)
}

