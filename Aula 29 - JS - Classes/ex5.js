const array = [
    {
        id: 5,
        nome: 'Maria',
        idade: 50
    },
    {
        id: 7,
        nome: 'jose',
        idade: 45
    },
    {
        id: 9,
        nome: 'joao',
        idade: 13
    }
]

const pessoasMaioresdeIdade13 = array.filter(item => item.idade > 13)
console.log(pessoasMaioresdeIdade13)
const pessoasId7 = array.filter(item => item.id === 7)
console.log(pessoasId7)
console.log(pessoasId7[0].idade)
const pessoa7 = array.find(item => item.id === 7)
console.log(pessoa7, pessoa7.nome, pessoa7.idade)

