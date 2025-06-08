// 1. Crea un array que almacene cinco animales

let myArray = ["perro", "gato", "caballo", "hamster", "tortuga"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.push("cocodrilo")
myArray.unshift("pez")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(3, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Libro 6", "Libro 5")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("Libro 3")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"]
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

/*
console.log(myMap.has(5))
console.log(myMap.get(5))
*/

if (myMap.has(5)) {
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

/*
let verano = ["Junio", "Julio", "Agosto"]
myMap.set("verano", verano)
console.log(myMap)
*/

myMap.set("verano", ["Junio", "Julio", "Agosto"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = [1, 2, 3, 4, 5]
let mySet2 = new Set(myArray2)
let myMap2 = new Map()
myMap2.set("números", mySet2)
console.log(myMap2)