// Strings


// Concatenación de cadenas
let myName = "Cristian"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// longitud
console.log(greeting.length) 

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[3])

// Metodos comunes
console.log(greeting.toUpperCase()) // Poner en mayusculas
console.log(greeting.toLowerCase()) // Poner en minusculas
console.log(greeting.indexOf("Cristian")) // Saber donde empieza dicha palabra
console.log(greeting.includes("Cristian")) // Saber si contiene dicha palabra
console.log(greeting.includes("Gurumendy"))
console.log(greeting.slice(0, 10)) // Mostrar un pedazo de código
console.log(greeting.replace("Cristian", "Gurumendy")) // Reemplazar string

// Template literals (plantillas literales)
let message = `Hola, este es 
mi curso de 
JavaScript`

console.log(message)

console.log(`Hola, ${myName}!`)
