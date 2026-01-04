//Super heroe

let name = "Iron man";
let age = 35;
let power = "fly"

let ironMan = {
    nombre: "Tony- stark",
    age: 35,
    power: " FLY"
};

console.log(ironMan);
console.log(ironMan.nombre);
console.log(ironMan.edad);
console.log(ironMan["nombre"]);
console.log(ironMan["age"]);
console.log(ironMan["power"]);

// modificar propiedad
ironMan["nombre"] = "Paul marco";
console.log(ironMan);

// eliminar personaje
delete ironMan.power;
console.log(ironMan);