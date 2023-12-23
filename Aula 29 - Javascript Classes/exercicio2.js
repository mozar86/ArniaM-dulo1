const io = require('../io/io')

/* Faça um programa para receber modelo, marca e valor de 5 smartphones utilizando de uma classe Celular. Depois inclua na classe método que mostre os dados de cada um nesse formato: Modelo:
[modelo] | Marca: [marca] | Valor: [valor]. Chame o método para cada smartphone. */

class Celular {
    modelo
    marca
    valor

    constructor(modelo, marca, valor) {
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
    }

    mostrarCelulares() {
        io.write(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: ${this.valor}`)
    }
}

let celulares = []

for (let i = 0; i < 10; i++) {
    io.write('Informe o modelo')
    const modelo = io.read()
    io.write('Informe a marca')
    const marca = io.read()
    io.write('Informe o valor')
    const valor = io.readFloat()

    const celular = new Celular(modelo, marca, valor)
    celulares.push(celular)
}

celulares.forEach(celular => {
    celular.mostrarCelulares()
})

