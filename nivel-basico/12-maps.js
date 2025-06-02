// MAP

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map ([
    ["name", "Cristian"],
    ["email", "cristiangurumendy@gmail.com"],
    ["age", 25]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias","cgurumendy")
myMap.set("nombre", "Adrian")
myMap.set("name", "Adrian")

console.log(myMap)

// get (obtener valores de una clave)

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has (forma más eficiente de comprobar si una clave existe)

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")
console.log(myMap)

// keys (mostrar solo claves de un map)

console.log(myMap.keys())

// values (mostrar valores de las claves)

console.log(myMap.values())

// keys & values

console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)