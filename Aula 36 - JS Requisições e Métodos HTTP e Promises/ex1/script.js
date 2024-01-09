//fazendo a requisição HTTP para a rota /users
const dados = fetch('https://jsonplaceholder.typicode.com/users')
console.log(dados)

//definindo a ação a ser efetuada após a conclusão da promessa (recebe a resposta no formato HTTP. É preciso converter)
dados.then((respostaHttp) => {
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) => {
    console.log(resposta)
    //recupera o elemento HTML da página através do DOM
    const lista = document.querySelector('.lista')
    
    //percorre o array de usuários retornado pela API e insere cada usuário como um item da lista
    resposta.forEach((usuario) => {
        lista.innerHTML = lista.innerHTML + 
        `<li>${usuario.id} - ${usuario.name}</li>`
    });
})