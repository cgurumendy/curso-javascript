// ARRAY

// Declarar e inicializar

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3 , 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, "Cristian" , 4, true]
myArray2 = new Array(1, 2, "Cristian" , 4, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Cristian"
myArray2[1] = "cgurumendy"

console.log(myArray2)

// Métodos comunes

myArray = []

// push y pop (push añade, pop elimina)

myArray.push("Cristian")
myArray.push("Gurumendy")
myArray.push(25)

console.log(myArray)

myArray.pop()

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo imprime
console.log(myArray)

// shift (elimina también)

myArray.shift()
console.log(myArray)

myArray.unshift("Cristian", "Gurumendy", 18)
console.log(myArray)

// length (longitud)

console.log(myArray.length)

// clear (borrar array)

myArray = []
console.log(myArray)

myArray.length = 0 //Alternativa
console.log(myArray)

// slice (crear nuevo array de elementos de un array)

myArray.push("Cristian", "Gurumendy", "cgurumendy", 18, true)
let myNewArray = myArray.slice(1, 3)
console.log(myArray)
console.log(myNewArray)

// splice (primer elemento, y segundo cuantos quieres eliminar)

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Cristian", "Gurumendy", "cgurumendy", 18, true]
myArray.splice(1, 2, 3) // Coge el 1er elemento, elimina los 2 siguientes y añade el 3)
console.log(myArray)


