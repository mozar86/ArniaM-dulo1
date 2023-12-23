const io = require('../io/io')

/* Programa que que receba 5 salários e retorne a soma de todos os salários */

let somaSalarios = 0
for (let i = 0; i < 5; i++) {
    io.write(`Informe o ${i +1}º salário:`)
    const salario = io.readFloat()

    //somaSalarios = somaSalarios + salario
    somaSalarios += salario
}

io.write(`A soma dos salários é: R$ ${somaSalarios}`)