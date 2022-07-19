const butao = document.querySelector('.butao')
const cpf = document.querySelector('#cpf')
const celular = document.querySelector('#celular')
const nome = document.querySelector('#nomeCompleto')
const email = document.querySelector('#email')

butao.onclick = () =>{
    let a = cpf.value
    if(a.length !== 11){
        cpf.classList.add('error')
    }else if(a.length == 11){
        cpf.classList.remove('error')
    }

    let b = celular.value
    if(b.length !== 11){
        celular.classList.add('error')
    }else if(b.length == 11){
        celular.classList.remove('error')
    }

    let c = nome.value
    if(c.length < 5){
        nome.classList.add('error')
    }else{
        nome.classList.remove('error')
    }


    let emailVerificado = email.value
    if(emailVerificado.includes('@') && emailVerificado.substr(-1) == 'm'){
        email.classList.remove('error')
    }else{
        email.classList.add('error')
    }

    console.log(emailVerificado.substr(-1))


}