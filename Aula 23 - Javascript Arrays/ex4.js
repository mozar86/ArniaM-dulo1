const numeros = [4, 45, 78, 2, 100, 6]

console.log(numeros)
numeros.unshift(45)

numeros.pop()
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.splice(2, 1)
console.log(numeros)

const array2 = [67, 400, 3]
const array3 = numeros.concat(array2)
console.log(array3)

const numerosString = numeros.join(' - ')
console.log(numerosString)

numeros.reverse()
console.log(numeros)

numeros.sort()
console.log(numeros)

const nomes = ['Arnia', 'Teste', 'Banana', 'Maçã']
nomes.sort()
console.log(nomes)
