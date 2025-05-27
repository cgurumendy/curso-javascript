// 1. Concatena dos cadenas de texto

console.log("Hola" + "Mundo")

// 2. Muestra la longitud de una cadena de texto

let nombre = "Cristian Gurumendy"
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string

console.log(nombre.slice(0, 17))

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let texto = `Esto es un 
texto de 
varias lineas`
console.log(texto)

// 6. Interpola el valor de una variable en un string

console.log(`Hola, ${texto}!!!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(nombre.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(nombre.includes("Adrian"))

// 9. Comprueba si dos strings son iguales

let nombre2 = "Javier Alonso"
console.log(nombre === nombre2)

// 10. Comprueba si dos strings tienen la misma longitud

let longitudNombre = nombre.length
let longitudNombre2 = nombre2.length
console.log(longitudNombre == longitudNombre2)

console.log(nombre.length == nombre2.length)

console.log(longitudNombre)
console.log(longitudNombre2)