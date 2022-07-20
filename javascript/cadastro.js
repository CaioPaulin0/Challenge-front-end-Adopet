import EmailValidate from "./validation.js"
import Password from "./repeatPassword.js"

function Cliente(email,nome,senha,foto,cidade,sobre){
    this.email = email;
    this.nome = nome;
    this.senha = senha;
    this.foto = foto;
    this.cidade = cidade;
    this.sobre = sobre;

    return
}

const form = document.getElementById('cadastroFormulario')

let localStoreArray = []

form.addEventListener('submit', (e) => {
    const $ = document.querySelector.bind(document)

    let ClienteData = new Cliente(EmailValidate("email"),$("#nome").value,Password("password","passwordR"),'','','')
    
    if(ClienteData.email === undefined || ClienteData.nome === '' || ClienteData.senha === undefined){
        console.log("algum valor estar invalido")
        return
    }
    else{
        localStorage.getItem("cliente")
        localStoreArray.push(ClienteData)
        localStorage.setItem("cliente", JSON.stringify(localStoreArray))
    }
    
    e.preventDefault()
})
