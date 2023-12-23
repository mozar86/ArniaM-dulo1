const alterarParagrafos = () => {
    const paragrafos = document.getElementsByTagName('p')
    console.log(paragrafos)

    // Transformando o HTMLCollection em array para que possamos percorrer o array
    const elementsArray = Array.from(paragrafos)
    console.log(elementsArray)

    elementsArray.forEach((paragrafo) => {
        paragrafo.innerHTML = paragrafo.innerHTML + ' - Teste'
    })
}