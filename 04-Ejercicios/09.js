// * Mismo ejercicio, distinta forma.

let pares = [
    [1, { name: "Juan" }],
    [2, { name: "Juanito" }],
    [3, { name: "Ju" }],
]

let array = [{
    id: 1,
    name: 'Juan',
}, {
    id: 2,
    name: 'Juanito',
}, {
    id: 3,
    name: 'Ju',
}]

function toCollection(arr){
    let collection = []
    for (idx in arr){
        let elemento = arr[idx]
        collection[idx] = elemento[1]
        collection[idx].id = elemento[0]
    }
    return collection
}

resultado = toCollection(pares)
console.log(resultado);