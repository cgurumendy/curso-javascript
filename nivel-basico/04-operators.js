//  ¡Operadores Aritméticos!

let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b) // Módulo (Resto división)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// ¡Operadores de Asignación!

let myVariable = 2
console.log(myVariable)
myVariable += 2  // Lo mismo que:  myVariable= myVariable + 2
console.log(myVariable)
myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)

// ¡Operadores de Comparación!

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a === 6) // Igualdad por identidad/tipo
console.log(a === "6") // Igualdad por identidad/tipo

console.log(a != 6)
console.log(a !== "6")

console.log(0 == false)
console.log(1 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


// == (Compara valor) vs === (Compara valor e identidad/tipo)


// TRUTHY VALUES (VALORES VERDADEROS)

// Todos los numeros positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacías
// Boolean true


// FALSY VALUES (VALORES FALSOS)

// 0
// 0n
// null
// undefined
// NaN
// Boolean false
// Cadenas de texto vacías


// ¡Operadores lógicos!

// and &&
console.log(5 > 10 && 15 > 20) // Si uno es falso = false
console.log(5 < 10 && 15 < 20) // Todo verdadero = true
console.log(5 < 10 && 15 > 20) // Uno o dos falsos = false

// or ||
console.log(5 > 10 || 15 > 20) // Los dos son falsos = false
console.log(5 < 10 || 15 < 20) // Los dos son verdadero = true
console.log(5 < 10 || 15 > 20) // Uno es verdadero = true

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not ! (invierte el valor)
console.log(!true)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios (otra forma de escribir condicionales)
const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo") // Si es true se ejecuta el código después del ?, si no se ejecuta el código después de :

