/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuesto
 */

function calculateTaxAmount(price, taxRate) {
    return price + price * taxRate
}

let answer = calculateTaxAmount(19.90, 0.15);
console.log(answer)