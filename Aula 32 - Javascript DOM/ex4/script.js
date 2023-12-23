const pessoas = [
    {id: 1,
    nome: 'Mozar',
    cpf: '365.784.665-85'
    },
    {
        id: 2,
    nome: 'Vitória',
    cpf: '965.785.865-85'
    },
    {
        id: 3,
    nome: 'Letícia',
    cpf: '465.734.995-85'
    }
]

const carregar = () => {
    const pessoasContainer = document.querySelector('.pessoas')
    pessoas.forEach(pessoa => {
        pessoasContainer.innerHTML = pessoasContainer.innerHTML + `
        <div>
        ${pessoa.id} - ${pessoa.nome} - ${pessoa.cpf}
        </div>`
    })
}