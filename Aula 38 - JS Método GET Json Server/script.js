/*2º Passo: a função getPosts realiza a requisição à API, converte para json, e retorna posts, para que o objeto requisitado possa ser usado como parâmetro na função mostrarPosts*/
const getPosts = async () => {
    //1º Buscar os posts na API
    const requisicao = await fetch('http://localhost:3000/posts') //Requisitar o objeto posts na API, passando o endereço como parâmetro, e usando o await para que não fique numa promessa
    const posts = await requisicao.json() //Converte a requisição em formato json, também usando await para não gerar outra promessa
    console.log(posts) // Imprime
    return posts
}
/*3º Passo: A função mostrarPosts recebe o retorno da função getPosts, depois obtém do documento HTML uma div, depois percorre o objeto posts, e lança para a div do documento HTML os itens id e titulo do objeto posts.*/
const mostrarPosts = (posts) => {
    const postsDiv = document.querySelector('.posts')

    posts.forEach(post => {
        postsDiv.innerHTML = postsDiv.innerHTML + 
        `
        <div class="post">
            <div><img src="${post.imagem}"></div>
            <section>
                <div><h2>${post.id}# BREAKING</h2></div> 
                <div><h1>${post.titulo}</h1></div> 
                <div><h3>${post.autor}</h3></div>
                <div><p>${post.texto}</p></div>
            </section>  
        </div>
        `
    })
}

/*1º Passo: A função carregar dados será executada, e irá aguardar o retorno da função getPosts, que está sendo salva na variável postagens*/
const carregarDados = async () => {
    // 1º Buscar os posts na API
    const postagens = await getPosts() // Aguardando a resposta da função getPosts para ir para a próxima linha
    
    /* Caso fosse tudo uma função só, a injeção ao HTML tbm estaria presente, assim:
    const postsDiv = document.querySelector('.posts')

    posts.forEach(post => {
        postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`
    }) 
    */

    /*4º Passo: a função mostrarPosts recebe como parâmetro a variável postagens, que está aguardando a execução da função getPosts. Isso garante que mostrar Posts só será executada quando getPosts já tiver retornado o conteúdo do objeto incluso na API*/
    mostrarPosts(postagens)
}

carregarDados() // Chama a função, que por estar fora do escopo de qualquer função, esta sim será executada.