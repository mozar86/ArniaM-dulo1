const io = require('../io/io')
/* Faça um programa que receba os dados de uma pessoa e posteriormente, mostre na tela como uma string: */

io.write('Cadastro de pessoa:')

io.write('Informe o nome:')
const nome = io.read()
io.write('Informe o seu CPF:')
const cpf = io.read()
io.write('Informe a sua data de nascimento:')
const data = io.read()

const pessoa = {
    nome: nome, cpf: cpf, dataNascimento: data
}

io.write(`Nome: ${pessoa.nome} | CPF: ${pessoa.cpf} | Data de nascimento: ${pessoa.data}`)