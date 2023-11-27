const form = document.getElementById("novoItem")

form.addEventlistener("submit", (evento) => { 
    evento.preventDefault()


    console.log(evento)
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
})

