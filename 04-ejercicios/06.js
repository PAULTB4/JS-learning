/**
 *Crear un algoritmo que devuleva cantidad
 de números positivos de un array 
 */

function countPositives(items) {
    let positiveCount = 0;

    for (const element of items) {
        if (element > 0) positiveCount++;
    }

    return positiveCount;
}


const itemsay = [2, 5, 7, 15, -5, -100, 55];

let answer = countPositives(itemsay);
console.log(answer);