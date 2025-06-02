// SET

// declarar

let mySet = new Set()

// inicializar

mySet = new Set("Cristian", "Gurumendy", "cgurumendy", 18, true)
console.log(mySet)  // Así NO

mySet = new Set(["Cristian", "Gurumendy", "cgurumendy", 18, true])
console.log(mySet)

// Métodos comunes

// add & delete

mySet.add("cristiangurumendy@gmail.com")
console.log(mySet)

mySet.delete(6)
console.log(mySet) //No funciona, hay que indicarle el valor del elemento a borrar

mySet.delete(true)
console.log(mySet)

console.log(mySet.delete(18)) //Retorna un boolean, true si existe y se ha borrado, sino false

// if (mySet.delete("18")) {
// } else {
// }

// has

console.log(mySet.has("cgurumendy"))
console.log(mySet.has(18))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un arrar a set

mySet = new Set(myArray)
console.log(mySet)

// Set NO admite dupilicados (Array sí)

mySet.add("cgurumendy")
console.log(mySet)
