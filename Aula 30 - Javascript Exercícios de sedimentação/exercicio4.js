const io = require('../io/io')

/* Escreva uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve aplicar a função de callback a cada palavra do array e retornar um novo array contendo apenas as palavras que satisfazem a condição definida pela função de callback. */

let clubesNE = ['Santa Cruz', 'Náutico', 'Sport', 'Bahia', 'Vitória', 'Ceará', 'Fortaleza']

const filtrarClubes = (clubesNE, fnselecaoClubes) => { // Função recebe o array clubesNE e a função fnselecaoClubes
    return clubesNE.filter(clube => fnselecaoClubes(clube)) // Retorna um método filter no array clubesNE, que cria um arrow function que recebe como parâmetro a função fnselecaoClubes recebendo o parâmetro clube. 
}

const selecaoClubes = (clube => clube.length > 5) // Função que retorna entre as strings em clubesNE, as que tem mais de 5 caracteres

const resultado = filtrarClubes(clubesNE, selecaoClubes); // Salva na variável resultado a função filtrarClubes, recebendo como parâmetro o array clubesNE e a função selecaoClubes
console.log(resultado)
