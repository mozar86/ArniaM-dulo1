const io = require('../io/io')

/* Faça um programa para receber nome, preço e ano de lançamento de 10 carros utilizando de uma classe Carro. Depois inclua na classe um método que aumente o preço do carro em R$5.000. Chame o método para cada carro e mostre os dados atualizados. */

class Carros {
    nome
    preco
    ano

    constructor(nome, preco, ano) {
        this.nome = nome
        this.preco = preco
        this.ano = ano
    }

    aumentoPreco () {
        this.preco += 5000
    }
}

let carros = []

for (let i = 0; i < 10; i++) {
    io.write('Informe o nome')
    const nome = io.read()
    io.write('Informe o preço')
    const preco = io.readFloat()
    io.write('Informe o ano')
    const ano = io.read()

    const carro = new Carros(nome, preco, ano)
    carros.push(carro)
}

carros.forEach(carro => {
    carro.aumentoPreco()
})

console.log(carros)
