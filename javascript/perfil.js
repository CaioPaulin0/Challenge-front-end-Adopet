// aqui vai ficar a parte aonde vem uma var do login e coloca no perfil

function nome(data){
    let nome = document.querySelector('.campoNome')
    nome.innerHTML = `<p>${data.nome} <p>`

    return nome
}

function Perfil(data) {

    if(!data){
        console.log('nenhuma info')
        return
    } else{
        nome(data)
        return
    }
}
