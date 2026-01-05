/**
 * Crear algoritmo que tome un array
 *  de objetos y devuelva un array de pares
 */

let users = [
    { id: 1, name: "Nicolas" },
    { id: 2, name: "Felipe" },
    { id: 3, name: "Chachito" },
    { id: 4, name: "Paul" },
];

function createPairs(users) {
    let arrayPairs = [];
    for (let index = 0; index < users.length; index++) {
        arrayPairs.push([index, users[index]]);
    }

    return arrayPairs
}

let answer = createPairs(users);
console.log(answer);