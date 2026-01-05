/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta el N
 */

let n = 7;

function buildRange(n) {
    let ranges = [];
    for (let i = 1; i <= n; i++) {
        ranges.push(i);
    }
    return ranges;
}

let answer = buildRange(n);
console.log(answer);