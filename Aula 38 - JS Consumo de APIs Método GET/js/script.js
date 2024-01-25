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
    let conteudo = ''
    posts.forEach(post => {
        conteudo = conteudo + 
        `
            <div class="card">
                <img src="${post.imagem}" alt="Imagem do post">
                <section>
                    <div class="post-header">
                        <h1>${post.titulo}</h1>
                        <h4>${post.autor}</h4>
                    </div>
                    <div class="post-content">
                        <p>${post.texto}</p>
                    </div>
                    <div class="botoes">
                        <button class="botao-excluir" onclick="botaoExcluir()">Excluir</button><button class="botao-editar" onclick="botaoEditar()">Editar</button>
                </div>
                </section>
            </div>
        `
    })
    postsDiv.innerHTML = conteudo
}

/*1º Passo: A função carregar dados será executada, e irá aguardar o retorno da função getPosts, que está sendo salva na variável postagens*/
const carregarDados = async () => {
    // 1º Buscar os posts na API
    const postagens = await getPosts()// Aguardando a resposta da função getPosts para ir para a próxima linha

    /*4º Passo: a função mostrarPosts recebe como parâmetro a variável postagens, que está aguardando a execução da função getPosts. Isso garante que mostrar Posts só será executada quando getPosts já tiver retornado o conteúdo do objeto incluso na API*/
    mostrarPosts(postagens)
}

carregarDados() // Chama a função, que por estar fora do escopo de qualquer função, esta sim será executada.

const redirectCadastrar = () => {
    window.location.href = 'html/cadastrar.html'
}

//---------------------Botão EDITAR------------------------------//
const editar = document.querySelector('#botao-editar');
let id = null;

const botaoEditar = () => {
    editar.addEventListener('click', async (evento) => {
        evento.preventDefault();

        const titulo = editar.elements['titulo'].value;
        const autor = editar.elements['autor'].value;
        const imagem = editar.elements['imagem'].value;
        const texto = editar.elements['texto'].value;

        const objetoNoticia = {
            titulo,
            autor,
            imagem,
            texto
        };

        if (id !== null) {
            await editarNoticia(id, objetoNoticia);
            window.location = 'index.html';
        } else {
            console.error('ID não está definido. Não é possível editar a postagem de notícias.');
        }
    });
};

const editarNoticia = async (id, post) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
};

const obterPost = async (id) => {
    const requisicaoPost = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await requisicaoPost.json();

    return post;
};

//-------------------------------Botão EXCLUIR---------------------------//

const excluir = async () => {
    await fetch(`http://localhost:3000/posts${id}`, {
        method: "DELETE"
    })
    carregarDados()
}

