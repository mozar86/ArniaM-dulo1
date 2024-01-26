//Passo 2: Recupera o formulário do documento HTML
const formulario = document.querySelector('#formulario')
let id = null

//Passo 6: adicionar evento que envia ao formulário um objeto com a notícia editada
formulario.addEventListener('submit', async(evento) => {
    evento.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagem'].value
    const texto = formulario.elements['texto'].value

    const objetoNoticia = {
        titulo,
        autor,
        imagem,
        texto
    }

    await editarNoticia(id, objetoNoticia)

    window.location = '../index.html'
})

//Passo 5: editar a notícia na API usando o ID
const editarNoticia = async (id, noticia) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: { 
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })
}

//----------------//---------------//----------------//

//Passo 3: buscar a notícia na API e retorná-la
const getNoticia = async (id) => {
    const request = await fetch(`http://localhost:3000/posts/${id}`)
    const noticia = await request.json()
    return noticia
}
//Passo 4: carregar os dados do formulário usando a notícia como parâmetro
const carregarNoticiaFormulario = (noticia) => {
    document.querySelector('#titulo').value = noticia.titulo
    document.querySelector('#autor').value = noticia.autor
    document.querySelector('#imagem').value = noticia.imagem
    document.querySelector('#texto').value = noticia.texto
}
//Passo 1: Obtém ID através da URL e chama as funções seguintes
const carregarId = async () => {
    const parametros = window.location.search
    const objetoParametros = new URLSearchParams(parametros)
    id = objetoParametros.get('id')
    
    const noticia = await getNoticia(id)
    
    carregarNoticiaFormulario(noticia)
}

carregarId()