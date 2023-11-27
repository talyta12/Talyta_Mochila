const form = document.getElementById("novoItem")

form.addEventListener("submit", ()=> {
     evento.preventDefault() 

     
     console.log(evento)
     console.log(evento.target[0].value)
})