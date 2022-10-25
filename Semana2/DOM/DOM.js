//EVENTOS
const form = document.querySelector('form')
const ul = document.querySelector('ul')
//mais de um evento 
//form.addEventListener('submit', function(event){
//    event.preventDefault()
//})
//form.addEventListener('submit', function(event){
//    console.log('Bom dia')
//})

//unico evento
form.onsubmit = function (event){
    event.preventDefault()
//pegando dado inserido 
    const input = form.querySelector('input')
    const value = input.value
//criação de eventos  
    const li = document.createElement('li')
    li.setAttribute("class", "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
    li.textContent = value

    if(value=="") return
    
    const button = document.createElement('button')
    button.setAttribute("class", "text-red-700 delete")
    button.textContent = "x"
    //adiciona o elemento criado 
    li.appendChild(button)
    ul.appendChild(li)
    //outro metodo de criação de elem
    //ul.innerHTML += '<li>${value}</li>'
}
//Target e currentTarget
ul.onclick = function (event) {
   if(event.target.classList.contains('delete')) {
    console.log(' botao delete')
    if(confirm("Deseja deletar esse item?")){
        //removendo tudo deletando elem pai
        event.target.parentElement.remove()
    }
   }

}
