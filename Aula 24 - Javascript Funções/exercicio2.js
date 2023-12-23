const io = require('../io/io')

/* Faça uma função que recebe a idade de um nadador por parâmetro e retorna a categoria desse nadador de acordo com a tabela abaixo: */

// Idade ------------------------ Categoria
// 5 a 7 anos ------------------- Infantil A
// 8 a 10 anos ------------------ Infantil B
// 11 a 13 anos ----------------- Juvenil A
// 14 a 17 anos ----------------- Juvenil B
// Maiores de 18 anos (inclusive) Adulto

function categoria (idade) {
    let nadador

    if (idade >= 5 && idade <= 7) {
        return 'A categoria do nadador é Infantil A'
    } else if (idade >= 8 && idade <= 10) {
        return 'A categoria do nadador é Infantil B'
    } else if (idade >= 11 && idade <= 13) {
        return 'A categoria do nadador é Juvenil A'
    } else if (idade >= 14 && idade <= 17) {
        return 'A categoria do nadador é Juvenil B'
    } else { (idade >= 18)
        return 'A categoria do nadador é Adulto'
    }
}


io.write('Digite a sua idade:')
idade = io.readInt()
let categoriaN = categoria()
io.write(categoriaN)


