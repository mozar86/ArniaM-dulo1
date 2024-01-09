//Consulta da API da Marvel
const timestamp = (new Date()).getTime()
const publicKey = '7db3040e7e276f82e35b3ece7a16ff93'
const privateKey = '9d8571b874564b7e5b33978a37d1e1bf2c8d90e0'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const mostrarDados = (resposta) => { //função que recebe como parâmetro a variável resposta, que contém o retorno da consulta à API convertida pra json
    const divPersonagens = document.querySelector('.personagens')
    const personagens = resposta.data.results

    personagens.forEach(personagem => {
        divPersonagens.innerHTML = divPersonagens.innerHTML + `<div>${personagem.id} - ${personagem.name}</div>`
    })
}

const buscarPersonagens = async () => {
    //Requisição HTTP - Método GET
    try { //Vai rodar se a execução da requisição der certo
        const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
    const resposta = await respostaHttp.json()//Transforma a resposta da API em "json" e salva em uma variável
    console.log(resposta)
    
    /* (Poderia ser escrito dessa forma, mas o ideal é separar a injeção de código em uma função)
    const divPersonagens = document.querySelector('.personagens')
    const personagens = resposta.data.results

    personagens.forEach(personagem => {
        divPersonagens.innerHTML = divPersonagens.innerHTML + `<div>${personagem.id} - ${personagem.name}</div>`
    })
    */
    } catch (error) { //Trata o erro se a requisição der errado
        console.log('Erro: ', error)
    }
}

buscarPersonagens() //chama a função

