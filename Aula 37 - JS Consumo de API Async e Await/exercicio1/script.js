const local = 'http://dataservice.accuweather.com/locations/v1/search'
const clima = 'http://dataservice.accuweather.com/currentconditions/v1/'
const apiKey = 'GCKt30URbUGEMRK1IvXLOzrlSABkJ7y0' 

const pesquisarClimaCidade = async () => {
    const pesquisa = document.getElementById('pesquisa').value

    try {
        const respostaPesquisa = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${local}&apikey=${apiKey}`)
        const resposta = await respostaPesquisa.json()

        const pesquisaLocal = await fetch(`${local}?q=${pesquisa}&apikey=${apiKey}`)
        const localInformado = await pesquisaLocal.json()

        const pesquisaClima = await fetch(`${clima}${local[0].Key}?apikey=${apiKey}`)
        const climaInformado = await pesquisaClima.json()
        

        document.getElementById('local').innerHTML = cidade[0].LocalizedName
        document.getElementById('clima').innerHTML = clima[0].WeatherText
        document.getElementById('temperatura').innerHTML = clima[0].Temperature.Metric.Value + 'ºC'
        document.getElementById('data').innerHTML = new Date(clima[0].LocalObservationDateTime).toLocaleDateString('pt-BR')

    } catch {
        console.log('Erro')
    }
}










//${urlClima}${cidade[0].Key}?apikey=${apiKey}
//clima[0].Temperature.Metric.Value + '°C'

//document.getElementById('local').innerHTML = cidade[0].LocalizedName
