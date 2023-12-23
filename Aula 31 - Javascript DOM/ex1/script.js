const alertarInicio = () => {
    console.log('Bem vindo, aluno da Árnia')
    window.alert('Bem vindo!')
}

const alertarClique = () => {
    console.log('Foi clicado')
}

const alterarParagrafo = () => {
    const paragrafo = document.getElementById('first')
    console.log(paragrafo)
    paragrafo.innerHTML = 'teste'
}

const alterarParagrafoDivs = () => {
    const paragrafo = document.getElementById('first')
    paragrafo.innerHTML = `
    <div>
        Div1
    </div>
    <div>
        Div2
    </div>`
}