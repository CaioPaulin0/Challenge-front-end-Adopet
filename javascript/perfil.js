// aqui vai ficar a parte aonde vem uma var do login e coloca no perfil

function nome(data){
    let nome = document.querySelector('.campoNome')
    nome.innerHTML = `<p> caio <p>`

    return nome
}

let dado = {}

export default function Perfil(data) {

    if(!data){
        console.log('nenhuma info')
        return
    } else{
        return dado = data
    }
}
