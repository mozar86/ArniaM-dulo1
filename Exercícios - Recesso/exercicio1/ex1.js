const io = require('../io/io')

/* Escreva um programa de computador que solicite login e senha para um usuário. Caso o login e senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a mensagem "Dados inválidos". (Os valores de login e senha corretos devem ser definidos em variáveis pelo programador) */

const usuario = 'mozar.lima'
const senha = 1234

io.write('Informe o usuário')
let novoUsuario = io.read()
io.write('Informe a senha')
let novaSenha = io.readInt()

if (novoUsuario === usuario && novaSenha === senha) {
    io.write('Bem vindo ao sistema')
} else {
    io.write('Dados inválidos')
}

