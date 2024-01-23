// função que busca livros na API
const getLivros = async () => {
    const dados = fetch('http://localhost:3000/livros')
    const livros = (await dados).json()

    return livros
}

const mostrarLivros = (listaLivros) => {
    const bodyTabela = document.querySelector('tbody')

    listaLivros.forEach(livro => {
        bodyTabela.innerHTML += 
        `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoLancamento}</td>
            </tr>
        `   
    })
}

const carregarDados = async () => {
    const listaLivros = await getLivros()
    console.log()

    mostrarLivros(listaLivros)
}

carregarDados()