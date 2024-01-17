//recuperando o formulário da página HTML através do DOM
const formulario = document.querySelector('#formulario')
let id = null

formulario.addEventListener('submit', async (e) => {    
    e.preventDefault() // evitar que as informações do fomulario sejam enviadas pra URL

    //recuperar as informações do formulario
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    //montar o objeto livro
    const objetoLivro = {
        titulo, //titulo: titulo
        autor, 
        anoLancamento: ano
    }

    //chamar a função que edita o livro na API
    await editarLivro(id, objetoLivro)

    //redirecionar para a tela de listagem 
    window.location = '../index.html'
})

//editar o livro na API através do ID
const editarLivro = async (id, livro) => {
    await fetch(`http://localhost:3000/livros/${id}`, {
        method: 'PUT',
        headers: { //informações adicionais (formato dos dados: fixo)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
}

//buscar o livro na API e retornar o livro
const getLivro = async (id) => {
    const request = await fetch(`http://localhost:3000/livros/${id}`)
    const livro = await request.json()

    return livro
}

//carregar os dados no formulário 
const carregarLivroFormulario = (livro) => {
    document.querySelector('#titulo').value = livro.titulo
    document.querySelector('#autor').value = livro.autor
    document.querySelector('#ano').value = livro.anoLancamento
}

const carregarDados = async () => {
    //1º recupera parâmetros da URL (formato de string)
    const parametros = window.location.search
    console.log(parametros)
    //transforma os parametros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    //acessa o parâmetro desejado (id)
    id = objetoParametros.get('id')
    console.log(id)

    //chama a função para buscar o livro na API 
    const livro = await getLivro(id)
    console.log(livro)

    carregarLivroFormulario(livro)
}

carregarDados()