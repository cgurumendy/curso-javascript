// 1. Crea una variable para cada operación aritmética

let suma = 5 + 5
let resta = 5 - 5
let multiplicacion = 5 * 5
let division = 5 / 5
let exponente = 5 ** 5
let resto = 5 % 5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2
resta -= 2
multiplicacion *= 2
division /= 2
exponente **= 2
resto %= 2


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(6 > 5)
console.log(5 <= 6)
console.log(5 == 5)
console.log(5 == 5)
console.log(5 === 5)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(6 < 5)
console.log(5 >= 6)
console.log(5 == 6)
console.log(5 == 6)
console.log(5 === 6)

// 5. Utiliza el operador lógico and

console.log(5 == 5 && 5 <= 6)

// 6. Utiliza el operador lógico or

console.log(5 == 6 || 5 <= 6)

// 7. Combina ambos operadores lógicos

console.log(5 == 5 && 5 <= 6 || 3 == 5)

// 8. Añade alguna negación

console.log(!(5 == 5 && 5 <= 6) || 3 == 5)

// 9. Utiliza el operador ternario

const hayCafe = true
hayCafe ? console.log("Preparame un espresso") : console.log("Hay que comprar")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((2 + 3) == 5 || (10 / 5) <= 4)