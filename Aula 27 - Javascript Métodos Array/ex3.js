const array = [1, 6, 7, 8, 45]

const novoArray = array.map((item) => {
    const novoValor = item * 2
    return novoValor
})

console.log(novoArray)
