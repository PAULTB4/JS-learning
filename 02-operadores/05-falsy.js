//Short-circuit

//Falso
//false
//0
//''
//null
// undefined
// NaN

let name = 'Chanchito feliz';
let userName = name || 'Anonimo';
console.log(userName)

export function fn1() {
    console.log("Soy función 1");
    return false;
}
export function fn2() {
    console.log("Soy función 2");
    return true;
}