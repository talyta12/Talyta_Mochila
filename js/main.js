const form = document.getElementById("novoItem")

form.addEventlistener("submit", (evento) => { 
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)


    const novoItem =  document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    console.log(numeroItem)
    
}
