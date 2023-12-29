const io = require('../io/io')

/* Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false). */


function validacao(numero) {
    return numero % 2 === 0 // Verifica se o número é par   
}

io.write('Digite um número') // Entrada de dados do usuário
let numero = io.readInt() // Salva na variável o dado do usuário
let resultado = validacao(numero) /* 1. Chama a function "validacao"; 2. passa o argumento "numero"; 3. salva numa variável "resultado" */
io.write(`O resultado é ${resultado}`) // Imprime se é true ou false

