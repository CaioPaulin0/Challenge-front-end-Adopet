import EmailValidate from "./validation.js"
import Password from "./repeatPassword.js"

const cadastroObj = {
    email: String,
    nome: String,
    senha: String
}

const form = document.getElementById('cadastroFormulario')

form.addEventListener('submit', (e) => {

    const $ = document.querySelector.bind(document)

    cadastroObj.email = EmailValidate("email")
    cadastroObj.nome = $("#nome").value
    //cadastroObj.senha = $("#password").value//
    cadastroObj.senha = Password("password","passwordR")

    console.log(cadastroObj)
    e.preventDefault()
})
