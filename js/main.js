const form = document.getElementById("novoItem")

form.addEventlistener("submit", (evento) => { 
    evento.preventDefault()

    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)

    criaElemento(evento.target.elements['nome'].value,evento.target.elements['quantidade'].value)
    console.log(nome)
    console.log(quantidade)

 const novoItem =  document.createElement('li')
 

})

function criaElemento(nome, quantidade) {

}
