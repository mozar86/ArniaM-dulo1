
//Consulta da API da Marvel
const timestamp = (new Date()).getTime()
const publicKey = '7db3040e7e276f82e35b3ece7a16ff93'
const privateKey = '9d8571b874564b7e5b33978a37d1e1bf2c8d90e0'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

//salvando numa variável a resposta da promessa da API
const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then(respostaHttp => respostaHttp.json())
    .then(resposta => console.log(resposta))
    .catch(error => console.log(error))
