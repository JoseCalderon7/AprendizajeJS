// Función simple
function suma(){
    return 2 + 2;
}

// Función con argumentos
// * Dentro de una función se agrega un valor se llama "PARAMETRO"
function suma(b){
    return 1 + b;
}

// Función con argumentos aplicado
// * Cuando llamamos la función se les llama "ARGUMENTO"
let resultado = suma(5)
console.log(resultado)

// Ejercicios
function sumar(a, b, c){
    console.log(arguments) // ! Llama todo el listado que está recibiendo
    return a + b + c
}

let suma2 = sumar(1, 2, 1)
console.log(suma2)

console.log(typeof sumar)
console.log(typeof suma2)