// Ejercicio 3
// Crea un bucle for que recorra un array de productos.
// Dentro del bucle, utiliza console.log() para imprimir un mensaje por cada elemento. El mensaje debe indicar lo que necesitas comprar, siguiendo el formato: "¡No te olvides de comprar [producto]!".
const Componentes = ["CPU", "GPU", "Motherboard", "SSD", "Fuente de alimentación", "RAM", "Cooler"];

const seleccion = Componentes[0]
console.log(seleccion)

for (let C = 0; C < Componentes.length; C++) {
    console.log(`¡No te olvides de comprar ${Componentes[C]}!`)
}