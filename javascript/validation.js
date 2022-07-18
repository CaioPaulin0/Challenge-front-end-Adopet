
export default function EmailValidation(id){

    const emailId = document.getElementById(id).value

    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    
    if(!regex.test(emailId)){
        alert('email invalido')
    }
    else{
        return emailId
    }
    
}