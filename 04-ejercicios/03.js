function getByIdx(arr, idx) {
    if (idx < arr.length) {
        return arr[idx];
    }
    return 'Indice fuera de rango'
}

let resultado = getByIdx([1, 2], 1);
console.log(resultado);