document.getElementById("boton").onclick = function(){
    document.body.classList.toggle("oscuro")
}
let envio =document.getElementById("envio")
envio.addEventListener("mouseover", function(){
    envio.style.color = "red"
})
envio.addEventListener("mouseout", function(){
    envio.style.color = "black"
})
document.getElementById("Fotrmulario").oninput=function(){
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
