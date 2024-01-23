// recuperando o formulário da página HTML através do DOM
const formulario = document.querySelector('#formulario')
let id = null

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    const objetoLivro = {
        titulo,
        autor,
        anoLancamento: ano
    }
    //abaixo, chamar a função que edita o livro na API

})

//editar o livro na API através do ID
const editarLivro = (livro) => {
    fetch(`http://localhost:3000/livros/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)

    })
}

const getLivro = async (id) => {
    //buscar livro na API e retornar o livro
    const request = await fetch(`http://localhost:3000/livros/${id}`)
    const livro = await request.json()

    return livro
}

//carregar os dados no formulário
const carregarLivroFormulario = (livro) => {
    document.querySelector('#titulo').value = livro.titulo
    document.querySelector('#autor').value = livro.autor
    document.querySelector('#ano-lancamento').value = livro.anoLancamento
}

const carregarDados = async () => {
    // recupera parâmetros da URL (formato de string)
    const parametros = window.location.search
    console.log(parametros)
    // transforma os parâmetros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    console.log(objetoParametros)
    //acessa o parâmetro desejado (id)
    const id = objetoParametros.get('id')
    console.log(id)

    const livro = await getLivro(id)
    console.log(livro)

    carregarLivroFormulario(livro)
}

carregarDados()