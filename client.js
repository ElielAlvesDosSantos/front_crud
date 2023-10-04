let res_nome = document.getElementById('res_nome')
let res_idade = document.getElementById('res_idade')
let pesquisa = document.getElementById('pesquisa')
let consulta = document.getElementById('consulta')

let endpoint = 'http://localhost:3000/dados'

pesquisa.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value

    let dados = {
        nome: nome,
        idade: idade
    }
    fetch(endpoint,{
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res=> res.json())
    .then(retorno =>{
    console.log(retorno)
    })
})

consulta.addEventListener('click', ()=>{
    const codigo = document.getElementById('codigo').value
    fetch(`${endpoint}/${codigo}`,{
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        res_nome.innerHTML = 'Nome: ' + dados.nome
        res_idade.innerHTML = 'Idade: ' + dados.idade
    })
})