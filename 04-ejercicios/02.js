const resoluciones = [
    { name: "8K", width: 7680, height: 4320 },
    { name: "4K", width: 3840, height: 2160 },
    { name: "WQHD", width: 2560, height: 1440 },
    { name: "FHD", width: 1920, height: 1080 },
    { name: "HD", width: 1280, height: 720 },
];

function nombreResolucion(ancho, alto) {
    for (let data of resoluciones) {
        if (ancho >= data.width && alto >= data.height) {
            return data.name;
        }
    }
    return 'Resolucion no encontrada';
}

let nombre = nombreResolucion(1280, 720);
console.log(nombre)