const io = require('../io/io')

/*Faça um programa que receba os dados de 3 alunos e mostre esses dados: */

let alunos = []

for (let i = 0; i < 3; i++) {
    io.write('Informe o nome:')
    const nome = io.read()
    io.write('Informe a nota')
    const nota = io.readFloat()

    const aluno = {
        nome: nome, 
        nota, //Equivale a nota: nota
    }

    alunos.push(aluno)
}

console.log(alunos)
//console.log(alunos[1].nome)

alunos.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tirou a nota ${aluno.nota}`)
})

const alunosAtualizados = alunos.map(aluno => {
    aluno.nota = aluno.nota + 1
    return aluno
})

console.log(alunosAtualizados)

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7)

console.log(alunosAprovados)

const somaNotas = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota
},0)

console.log(somaNotas)