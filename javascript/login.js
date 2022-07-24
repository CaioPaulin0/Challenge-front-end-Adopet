
const form = document.querySelector('form')

let email = document.getElementById('emailInput')
let senha = document.getElementById('password')

const storelogin = JSON.parse(localStorage.getItem("cliente"))[0]

form.addEventListener('submit', (e) => {

    if (storelogin.senha == senha.value && storelogin.email === email.value) {
        alert('logado com sucesso')
    }
    else {
        alert('Dados incorreto')
    }
    
    e.preventDefault()
})
