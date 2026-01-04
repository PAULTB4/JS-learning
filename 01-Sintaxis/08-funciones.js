export function saludar(mensaje) {
    if (mensaje == "hola") {
        console.log("maldito kbro aña")
    } else {
        console.log("malo aña")
    }
}

export function sumar(a, b) {
    console.log(arguments)
    return a + b;
}