/* const alterarSubtitulo1 = () => {
    const subtitulo1 = document.querySelector('#subtitulo1')
    subtitulo1.classList.add('verde')
}

const alterarSubtitulo2 = () => {
    const subtitulo2 = document.querySelector('#subtitulo2')
    subtitulo2.classList.add('verde')
}

const alterarSubtitulo3 = () => {
    const subtitulo3 = document.querySelector('#subtitulo3')
    subtitulo3.classList.add('verde')
} */

// Todas as funções acima podem ser substituídas por esta
const alterarSubtitulo = (seletor) => {
    const subtitulo = document.querySelector(seletor)
    subtitulo.classList.add('verde')
}