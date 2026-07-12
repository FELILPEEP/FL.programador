// Ejercicio 4
// Recorrer un array de numeros y devuelva el mayor.
const numeros = [700, 111, 2500, 1000, 500, 5];

let mayor = 0;

for (let N = 0; N < numeros.length; N++) {
    if (numeros[N] > mayor) {
        mayor = numeros[N]
    }
}
console.log(`El numero más grande de ${numeros} es el ${mayor}`)

//para hacer este tuve que ayudarme con ia :O