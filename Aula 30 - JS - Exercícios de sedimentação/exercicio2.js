const io = require('../io/io')

/* Dado o seguinte array de objetos que representa produtos em um e-commerce:
const produtos = [
{ id: 1, nome: 'Camiseta', preco: 29.9 },
{ id: 2, nome: 'Calça', preco: 59.9 },
{ id: 3, nome: 'Tênis', preco: 99.9 }
]
Escreva uma função chamada calcularTotal que recebe esse array de produtos e retorna o valor total da compra, somando o preço de cada produto. */

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
    ]

const calcularTotal = (produtos) => { // Função que recebe o array produtos
    const soma = produtos.reduce((valorInicial, valorAtual) => { // Salvar na variável soma o método reduce, para calcular a soma dos preços
        return valorInicial + valorAtual.preco // Retorna o valor cálculo dos preços 
    },0)
   return soma // Salva na variável soma o retorno do método reduce
}

// Salva na variável totalCompra o resultado da função calcularTotal, que usa como parâmetro o array produtos
const totalCompra = calcularTotal(produtos)
io.write(totalCompra) // Imprime a variável totalCompra
