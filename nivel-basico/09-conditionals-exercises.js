// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Cristian"

let miNombre = "Cristian"

if (nombre == miNombre) {
    console.log(miNombre)
} 

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "cgurumendy"
let contraseña = "javascript"
let miUsuario = "cgurumendy"
let miContraseña = "javascript"

if (usuario == miUsuario && contraseña == miContraseña) {
    console.log("Datos de usuario y contraseña correctos")
} else {
    console.log("Datos incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 3

if (numero == 0) {
    console.log("El número es 0")
} else if (numero < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 13

if (edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log("No puedes votar, te faltan " + (18 - edad) + " años")
    console.log(`No puedes votar, te faltan ${18 - edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let message = edad >= 18 ? "Adulto" : "Menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "abril"

if (mes == "marzo", "abril", "mayo") {
    console.log("Primavera")
} else if (mes == "junio","julio","agosto") {
    console.log("Verano")
} else if (mes == "septiembre","octubre","noviembre") {
    console.log("Otoño")
} else {
    console.log("Invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "enero") {
    console.log("31 dias")
} else if (mes == "febrero") {
    console.log("28 dias")
} else if (mes == "marzo") {
    console.log("31 dias")
} else if (mes == "abril") {
    console.log("31 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "italiano"
let saludo

switch (idioma) {
    case "español":
        saludo = "Hola!"
        break
    case "inglés":
        saludo = "Hello!"
        break
    case "italiano":
        saludo = "Chiao!"
        break
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estación 

switch (mes) {
    case "enero":
        estación = "Invierno"
        break
    case "febrero":
        estación = "Invierno"
        break
    case "marzo":
        estación = "Invierno"
        break
    case "abril":
        estación = "Primavera"
        break
    case "mayo":
        estación = "Primavera"
        break
    case "junio":
        estación = "Verano"
        break
    case "julio":
        estación = "Verano"
        break
    case "agosto":
        estación = "Verano"
        break
}
console.log(estación)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let dias

switch (mes) {
    case "marzo":
        dias = 31
        break
    case "abril":
        dias = 31
        break
    case "mayo":
        dias = 31
        break
}

console.log(dias)