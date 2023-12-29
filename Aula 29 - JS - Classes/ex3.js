class Pessoa {
    id
    cpf
    nome 
    anoNascimento

    constructor(idConstrutor, cpfConstrutor, nomeConstrutor, anoCostrutor) {
        this.id = idConstrutor
        this.cpf = cpfConstrutor
        this.nome = nomeConstrutor
        this.anoNascimento = anoCostrutor
    }
}

const pessoa = new Pessoa(3, '12345678910', 'Beltrano', 1993)
const pessoaX = new Pessoa(4, '21345678910', 'Beltra', 1994)
const pessoaY = new Pessoa()
pessoaY.id = 5
pessoaY.nome = 'Yasddf'

console.log(pessoa, pessoaX, pessoaY)