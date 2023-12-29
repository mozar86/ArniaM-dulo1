//Criando um objeto que representa uma pessoa

const pessoa1 = {
    nome:'Mozar', dataNascimento: '16/09/1986',
    profissao: 'Consultor'
}

const pessoa2 = {
    nome: 'Vitória', dataNascimento: '11/10/2006', profissao: 'Baterista'
}

//console.log(pessoa1)


//acessando os dados do objeto
//console.log(pessoa1.nome)
//console.log(pessoa1.dataNascimento)
//console.log(pessoa1.profissao)

//Incluir novo atributo ao objeto
pessoa2.idade = 17
console.log(pessoa2)

//Alterando o valor de uma propriedade do objeto
pessoa2.nome = 'Vitória Morato'
console.log(pessoa2)

//Deletando uma propriedade do objeto
delete pessoa2.dataNascimento
console.log(pessoa2)