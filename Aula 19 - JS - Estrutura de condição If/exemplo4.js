const io = require('../io/io')

/* Faça um programa que receba uma idade e retorne para o usuário a sua faixa etária */

io.write('Informe a sua idade: ')
const idade = io.readInt()

if (idade < 12) {
    io.write('Infância')
} else if (idade >= 12 && idade < 18) { //&&=> e / || => ou
    io.write('Adolescência')
} else if (idade >= 18 && idade < 60) {
    io.write('Fase adulta')
} else {
    io.write('Idoso')
}