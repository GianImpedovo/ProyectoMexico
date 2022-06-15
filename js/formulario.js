window.onload = inicio;

function inicio() {

    fijarElementosForm();

    let btnSubmit = document.getElementById("enviar");
    btnSubmit.addEventListener("click", validarForm);
    

}

function validarForm() {
    let nombre = document.getElementById("nombre");
    let asunto = document.getElementById("asunto");
    let email = document.getElementById("email");

    if ( nombre.value.length == 0 ){
        alert(" No ingresaste el nombre ! ")
        return;
    } 
    if ( asunto.value.length == 0 ){
        alert(" No ingresaste el asunto ! ")
        return;
    }
    if ( email.value.length == 0 ){
        alert(" No ingresaste el email ! ")
        return;
    } 
    alert("Tu mensaje ha sido enviado ! ")

}

function fijarElementosForm() {
    let inputs = document.getElementsByClassName("formulario_input");
    for ( let i = 0; i < inputs.length ; i++){
        inputs[i].addEventListener("keyup", function() {
            if ( this.value.length >= 1 ){
                this.nextElementSibling.classList.add('fijar');
            } else {
                this.nextElementSibling.classList.remove('fijar');
            }
        })
    }
}