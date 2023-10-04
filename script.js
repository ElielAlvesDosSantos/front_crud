let endpoint = 'http://localhost:3000/'

fetch(endpoint)
.then(resposta=> resposta.json())
.then(dados =>{
    console.log(dados)
})

// fetch(endpoint)
// .then(resposta=> console.log(resposta))

// let resposta = fetch(endpoint)
// console.log(resposta)