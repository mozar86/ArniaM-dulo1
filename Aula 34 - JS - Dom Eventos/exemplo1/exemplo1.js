const alterarTitulo = () => {
    //função para alterar título da página
    console.log('função alterar título')
    //recuperando um elemento com a classe "título" e armazenando na variável
    const elementoTitulo = document.querySelector('.titulo')
    console.log(elementoTitulo.innerHTML)
    //alterando o conteúdo do elemento HTML da tag h1
    elementoTitulo.innerHTML = 'Título Árnia'
}

const alterarEstilo = () => {
    //essa função vai mudar as propriedades de estilo do título

    //recuperando o elemento com a classe "título" e armazenando numa variável
    const elementoTitulo = document.querySelector('.titulo')
    console.log(elementoTitulo.classList)

    //adicionando uma nova lista de classe à lista de classes do elemento
    elementoTitulo.classList.add('titulo-estilo')
}