document.getElementById("boton").onclick = function(){
    document.body.classList.toggle("oscuro")
}
let envio =document.getElementById("boton")
boton.addEventListener("mouseover", function(){
    boton.style.color = "red"
})
boton.addEventListener("mouseout", function(){
    boton.style.color = "black"
})
document.getElementById("Formulario").oninput=function(){
    let obligatorio = document.getElementById("obligatorio").value.trim()
    let mensaje = document.getElementById("mensaje")
    if(obligatorio === ""){
        event.preventDefault()
        mensaje.textContent= "Este campo es obligatorio"
        mensaje.style.color= "red"
    }
}
if (!Email.includes("@")){
    console.log("El correo debe contener @")
}
