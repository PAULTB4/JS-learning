/**
 * Crear algoritmoque devuelva un
 * array de objetos en base a pares
 */

let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chachito" }],
];

function toCollection(entries) {
    let newArray = [];
    for (const key in entries) {
        console.log(entries[0])
        newArray.push({ id: key, name: entries[key][1]['name'] })
    }

    return newArray;
}

let answer = toCollection(pairs);
console.log(answer);