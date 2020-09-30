const mensajeNombre = document.getElementById('mensajeAlertNombre')
const mensajeEmail = document.getElementById('mensajeAlertEmail')


function validarFormulario(e){
    e.preventDefault() // metodo que no deja que se ejecute lo que se va a ejecutar por dejecto
    let inputName = document.getElementById('name')
    let inputEmail = document.getElementById('email')

    if(inputName.value == ''){
        mensajeNombre.innerText = "Por favor llena el Nombre"
       inputName.classList.add('bgcAlert')     //al input agreguele una clase

    }if(inputEmail.value  == ''){
        mensajeEmail.innerText = "Por favor llena el Email"
        inputEmail.classList.add('bgcAlert')
    }
    
    if(inputName.value != ''  && inputEmail.value != '' ){
        
        //en este parte se esta haciendo la verificacion de todos los inputs los cuales deben estar completos
        swal("Muy Bien!", "Registro Exitoso", "success")
         // recibe una funcion de call back anonima y le dice cuanto tiempo se demora
       
    }
  
}
