
const form = document.querySelector('form')

let email = document.getElementById('emailInput')
let senha = document.getElementById('password')

const storelogin = JSON.parse(localStorage.getItem("cliente"))[0]

form.addEventListener('submit', (e) => {
    console.log(email)

    if (storelogin.senha == senha.value && storelogin.email === email.value) {
        alert('logado com sucesso')
        const dados = storelogin
        return
    }
    else {
        alert('Dados incorreto')
    }

    e.preventDefault()
})

export {dados}