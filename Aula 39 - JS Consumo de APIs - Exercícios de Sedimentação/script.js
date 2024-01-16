const requisicaoApis = async () => {
    const requisicaoApi = await fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup')
    const requisicaoListaReceitas = await fetch('https://rapidapi.com/apidojo/api/tasty')
    const opcoes = {
	    method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '853e50a216msh996053de637d8d0p10e864jsn8d312d55ac46',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	    }
    }
    return 
}












/*
try {
	const inicio = await fetch(requestApi, opcoes);
	const resultado = await response.text();
	console.log(resultado);
} catch (error) {
	console.error(error);
}*/