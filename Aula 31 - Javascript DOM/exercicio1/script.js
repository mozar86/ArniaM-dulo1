/* Considere que o seu cliente quer fazer uma página simples, contendo um título e três parágrafos (arquivo index.html). Porém, isso ele te pediu para fazer um arquivo de estilos, mas só aplicar os estilos quando o usuário clicar no botão “Carregar estilo”. Quais estilos ele quer aplicar na página:
a. Fonte Poppins
b. Título com 24px, negrito e com margem inferior de 20px
c. Os dois primeiros parágrafos ficam lado a lado, com uma distância entre si
de 10px, e o terceiro embaixo
d. Os parágrafos possuem fonte 14px e peso de 400
e. Todos os textos deverão ter a cor #2b2b2a */

const carregarEstilos = () => {
    const paragrafos = document.getElementsByTagName('p')
    console.log(paragrafos)
}
