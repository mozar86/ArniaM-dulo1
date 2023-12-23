const io = require('../io/io')

/* Faça um programa para receber dados de 10 pessoas (nome, idade e documento) criando um objeto para cada pessoa. Depois mostrar as que são maiores de idade (use o método de array .filter() para filtrar). */

let alunos = []

for(let i = 0; i < 5; i++) {
    io.write('Informe o nome:')
    const nome = io.read()
    io.write('Informe a idade:')
    const idade = io.readInt()
    io.write('Informe o documento:')
    const documento = io.read()

    const aluno = {
        nome, idade, documento
    }
    alunos.push(aluno)
}

const AlunoMaiorIdade = alunos.filter((aluno) => {
    return aluno.idade >= 18
},0)

io.write(AlunoMaiorIdade)