// if, else if, else

// if (si...)

let age = 16

if (age >= 18) {
    console.log("Eres mayor de edad")
} 

// else (si no...)

if (age >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

// else if (si no, si)

if (age >= 18) {
    console.log("Eres mayor de edad")
} else if (age < 18) {
    console.log("Eres menor de edad")
} else {
    console.log("No tienes edad")
} 

// Operador ternario (forma más rápida y compacta de escribir un if y else)

age >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

const message = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(message)

// Switch

let day = 7
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)

