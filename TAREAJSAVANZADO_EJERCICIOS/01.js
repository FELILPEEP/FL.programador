function calcularpromedio(nota1, nota2) {
    const promedio = (nota1 + nota2) / 2;
    return promedio
}

const notaprimerparcial = 7;

const notasegundoparcial = 6.5;

// console.log(notaprimerparcial, notasegundoparcial)

const promediofinal = calcularpromedio(notaprimerparcial, notasegundoparcial);

// console.log(promediofinal)

console.log(`La nota del primer parcial es ${notaprimerparcial}`)

console.log(`La nota del segundo parcial es ${notasegundoparcial}`)

console.log(`El promedio de las notas es ${promediofinal}`)