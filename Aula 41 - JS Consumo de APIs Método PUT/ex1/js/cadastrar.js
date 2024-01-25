// Passo 1: salvar numa variável a requisição feita ao documento HTML
const formulario = document.querySelector('#formulario')

// Passo 3: recebe como parâmetro o objeto e enviando-o para a API
const cadastrarLivro = async (objeto) => {

        await fetch('http://localhost:3000/livros'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoLivro) // conteúdo que será enviado para a API
        }
}

/*
    Passo 2: Adicionado ouvinte do evento de SUBMIT ao formulário
    1º parâmetro: evento 
    2º parâmetro: função anonima que será executada quando o evento acontecer
    Quando o formulário for submetido (clicar no botão de cadastrar com type=submit) a função anônima será chamada 
*/
formulario.addEventListener('submit', async (e) => {
    e.preventDefault() // Passo 2.1: evitar que as informações sejam enviadas pra URL

    // Passo 2.2: recuperar informações do formulário
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    // Passo 2.3: cria um objeto com as informações recuperadas do formulário
    const objetoLivro = {
        titulo: titulo,
        autor: autor,
        anoNascimento: ano
    }

    // Passo 4: Chama a função de cadastro do livro passando como parâmetro o objeto
    await cadastrarLivro(objetoLivro)
    
    window.location = 'index.html' // retornar par a página "index.html"
})