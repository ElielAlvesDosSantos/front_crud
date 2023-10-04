const listar = document.getElementById('listar')
const tabela_cliente = document.getElementById('tabela_cliente')

const endpoint = 'http://localhost:3000/dados'

listar.addEventListener('click', ()=>{
    fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        tabela_cliente.innerHTML = ''
        dados.forEach((valores)=>{
            // console.log(valores.id,valores.nome,valores.idade)
            let nova_linha = document.createElement('tr')
            let id_cliente = document.createElement('td')
            id_cliente.textContent += valores.id
            nova_linha.appendChild(id_cliente)
            let nome_cliente = document.createElement('td')
            nome_cliente.textContent += valores.nome
            nova_linha.appendChild(nome_cliente)
            let idade_cliente = document.createElement('td')
            idade_cliente.textContent += valores.idade
            nova_linha.appendChild(idade_cliente)
            tabela_cliente.appendChild(nova_linha)
        })
    }) 
})
