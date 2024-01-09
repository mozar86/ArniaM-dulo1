const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = formulario.elements['nome'].value
    const data = formulario.elements['data'].value

    const divResultado = document.querySelector('#resultado')
    const dataFormatada = new Date(data).toLocaleDateString()
    divResultado.innerHTML = `${nome} nasceu em ${dataFormatada}`
})