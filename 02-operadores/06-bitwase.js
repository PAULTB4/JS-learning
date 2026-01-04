//bit: 0 1
//Byte: 8 bits
//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5
//Byte: 00000110 -> 6

//OR (alineamos los 1 en binario de cada uno, los juntamos y convertimos a decimal)
console.log(1 | 3) // 0000 0011
console.log(1 | 4) // 0000 0101

//AND (Ambos numeros deben de compartir almenos un 1 en sus respectivas posiciones en boinario)  
console.log(1 & 3) // 0000 0001
console.log(1 & 4) // 0000 0000