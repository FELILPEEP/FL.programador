// Ejercicio 2
// Utilizando estructura de control determinar el medio de transporte más adecuado para una persona. Dada una distancia en metros, sugiera un medio de transporte basado en las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion
const distancia = 200000
if (distancia <= 1000) {
    console.log("Pie")
} else if (distancia > 1000 && distancia <= 10000) {
    console.log("Bicicleta")
} else if (distancia > 10000 && distancia <= 30000) {
    console.log("Colectivo")
} else if (distancia > 30000 && distancia <= 100000) {
    console.log("Auto")
} else if (distancia > 100000) {
    console.log("Avion")
}