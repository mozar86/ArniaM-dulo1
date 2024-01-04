const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Jose', idade: 19},
    {nome: 'Elisa', idade: 6}
]

//recuperando o elemento da página
const container = document.querySelector('.container')

//passando por cada objeto do array e acrescentando uma div com as informações de cada elemento "container"
pessoas.forEach((pessoa) => {
    container.innerHTML = container.innerHTML + `
        <div>
            ${pessoa.nome} tem ${pessoa.idade} anos
        </div>
    `
})