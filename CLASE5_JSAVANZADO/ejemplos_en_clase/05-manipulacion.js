const titulo = document.querySelector("h1");

// console.log(titulo)

//style

titulo.style.color = "red"

//se puede usar también backgroundColor
// fontSize

//classList
titulo.classList.add("fondo")

const boton = document.getElementById("boton")

const texto = document.getElementById("texto")

// console.log(boton,texto)

boton.addEventListener("click", ()=>{
    texto.classList.toggle("invisible")
})

// METODOS DE classList:

// .add: Agrega clases
// .remove: Elimina clases
// .toggle: Alterna la preseincia de una clase
// .replace: Reemplaza una clase por otra
// .lenght: Devuelve el numero de clases en el elemento 

const aclaracion= document.getElementById("aclaracion")

console.log(aclaracion)

aclaracion.innerHTML = "<h1> Este es un nuevo texto</h1>"
aclaracion.innertext = " Este es un nuevo nuevo nuevo texto"
