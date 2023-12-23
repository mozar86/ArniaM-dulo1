const io = require('../io/io')

/* Criar uma função que recebe os dados do usuário e posteriormetne utilizar uma segunda função */

/* Imagine que a função "receberUsuario" não tem acesso direto à função "darBoasVindas */

const darBoasVindas = (nome) => { // A função dá boas vindas ao usuário, recebendo o parâmetro "nome"
    io.write(`Olá ${nome}`) // Imprime a saudação
}

const receberUsuario = (fnBoasVindas, fnConfirmar) => { 
    io.write('Informe o seu nome')
    const nome = io.read()
    // darBoasVindas(nome) -> acesso direto 
   fnBoasVindas(nome) //chamando ela pelo apelido
   fnConfirmar()
}

receberUsuario(darBoasVindas, () => { 
    io.write('Verifique seu email e faça a confirmação!')
})
