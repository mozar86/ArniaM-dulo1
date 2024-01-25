//Passo 5: recuperando o formulário da página HTML através do DOM
const formulario = document.querySelector('#formulario')
let id = null

//Passo 6: adicionado um evento de envio ao formulário para 
formulario.addEventListener('submit', async (e) => {    
    e.preventDefault() //Passo 6.2: evitar que as informações do fomulario sejam enviadas pra URL

    //Passo 6.3: recuperar as informações do formulario
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    //Passo 6.4: montar o objeto livro
    const objetoLivro = {
        titulo,
        autor, 
        anoLancamento: ano
    }

    //Passo 6.5: chamar a função que edita o livro na API
    await editarLivro(id, objetoLivro)

    //Passo 6.6: redirecionar para a tela de listagem 
    window.location = '../index.html'
})

//Passo 4: editar o livro na API através do ID
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

//Passo 2: buscar o livro na API e retornar o livro
const getLivro = async (id) => {
    //Passo 2.2: requisitar a API passando o link da API com o ID
    const request = await fetch(`http://localhost:3000/livros/${id}`)
    //Passo 2.3: Converter a requisição em JSON
    const livro = await request.json()
    //Passo 2.4: retornar pra poder usar em outra função
    return livro
}

//Passo 3: carregar os dados no formulário, recebendo o livro como parâmetro da função
const carregarLivroFormulario = (livro) => {

    document.querySelector('#titulo').value = livro.titulo
    document.querySelector('#autor').value = livro.autor
    document.querySelector('#ano').value = livro.anoLancamento
}

//Passo 1: Obter o ID vindo da URL do documento HTML
const carregarDados = async () => {
    //Passo 1.2: recupera parâmetros da URL (formato de string)
    const parametros = window.location.search
    console.log(parametros)
    //Passo 1.3: transforma os parametros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    //Passo 1.4: acessa o parâmetro desejado (id)
    id = objetoParametros.get('id')
    console.log(id)
    //Passo 1.5: chama a função definida no Passo 2, para buscar o livro na API 
    const livro = await getLivro(id)
    console.log(livro)
    //Passo 1.6: chama a função definida no passo 3, para carregar os dados no formulário
    carregarLivroFormulario(livro)
}

carregarDados()