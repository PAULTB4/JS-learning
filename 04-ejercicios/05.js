/**
 * Crear iun algoritmo que devuleva número
 * menor y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (let number of arr) {
        if (number < menor) menor = number;
        if (number > mayor) mayor = number;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);