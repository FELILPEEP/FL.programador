const contenedor = document.querySelector(".contenedor")
console.log(contenedor)

const boton = document.getElementById("btn")
console.log(boton)

contenedor.addEventListener("mouseover", function(){
    contenedor.Style.backgroundColor = "blue"
})

contenedor.addEventListener("mouseout", function(){
    contenedor.Style.backgroundColor = "red"
})

boton.addEventListener("click", function(){
    if(contenedor.style.display == ""){
        contenedor.style.display = "none"
    } else {
        contenedor.style.display = ""
    }
})