const notas = [1, 10, 8, 5]

const somaArray = notas.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)

console.log(somaArray)