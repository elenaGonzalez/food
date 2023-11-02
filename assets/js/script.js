

function extraerDatos(){
    let email = document.getElementById('exampleInputEmail1').value;
    let nombre = document.getElementById('exampleInputPassword1').value;
    
    alert(nombre + "Gracias por completar el formulario. Tu correo "+email)
}

function calcularTotalTickets(){
    // let email = document.getElementById('inputEmail').value;
    // let nombre = document.getElementById('').value;
    let precio = 200
    let cantidad = document.getElementById('inputQuantity').value;
    let categoria = document.getElementById('inputState').value;
    let descuento = 0;
    if(categoria == "Estudiante") descuento = 80;
    else if(categoria == "Trainee") descuento = 50;
    else descuento = 15;
    total.innerHTML = ((precio * descuento)/100) * cantidad;
    console.log("soy total" , total)
}

function clear(){
    console.log("en el clear...")
    document.getElementById("myform").reset();
}

