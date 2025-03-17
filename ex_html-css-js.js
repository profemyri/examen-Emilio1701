document.getElementById("oscuro").onclick = function(){
    document.body.classList.toggle("oscuro")
}
let boton =document.getElementById("boton")
boton.addEventListener("mouseover", function(){
    boton.style.color = "red"
})
boton.addEventListener("mouseout", function(){
    boton.style.color = "black"
})
if (!Email.includes("@")){
    console.log("El correo debe contener @")
}