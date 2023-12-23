class Pessoa {
    id
    nome 
    cpf
    anoNscimento

    idade() {
        const calculo = 2023 - this.anoNscimento
        return calculo
    }
}

const pessoa1 = new Pessoa()
pessoa1.id = 1
pessoa1.nome = 'fulano'
pessoa1.cpf = '123.456.789.10'
pessoa1.anoNscimento = 1986
const idadePessoa1 = 2023 - pessoa1.idade()

const pessoa2 = new Pessoa()
pessoa2.id = 2
pessoa2.nome = 'ciclano'
pessoa2.cpf = '109.876.543.21'
pessoa2.anoNscimento = 2006
const idadePessoa2 = pessoa2.idade()


console.log(idadePessoa1, idadePessoa2)

