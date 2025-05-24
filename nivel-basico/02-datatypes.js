// TIPOS DE DATOS PRIMITIVOS

// String (cadena de texto)
let name = "Cristian Gurumendy"

// Number
let age = 25  // Entero
let height = 1.80 // Decimal

// Boolean
let isStudent = true
let isTeacher = false

// Undefined (variable declara pero sin valor asociado, por ahora)
let undefinedValue
console.log(undefinedValue)

// Null (variable declarada con valor nulo)
let nullValue = null
console.log(nullValue)

// Symbol (valores unicos, identificadores de propiedades)
let mySymbol = Symbol("mysymbol")

// BigInt (Number Int normal es de máximo 64 bits)
let myBigInt = BigInt(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
let myBigInt2 = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

// Mostrar el tipo de dato de una variable
console.log(typeof myBigInt)
console.log(typeof nullValue) //Es un objeto, tipo de dato primitivo que al asignarse a una variable, esta toma como si fuera un objeto de tipo null, null si que es primitivo)



