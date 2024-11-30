const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pas = document.getElementById("password")
const text = document.getElementById("message")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    if(nombre.value.length <6){
        alert("El nombre no es valido");
    }
    if(!regexEmail.test(email.value)){
        alert("El email no es valido");
    }
    if(pas.value.length <8){
        alert("La contraseña no es valida, debe ser mayor a 8 caracteres");
    }
    if(text.value.length >=20){
        alert("El mensaje no es valido, debe ser menor o igual a 20 caracteres")
    }
})
