// * Crear un algoritmo que devuelva cantidad de números positvos en un array.

let array = [2, 5, 7, 15, -5, -100, 55];

let positivos = 0;

function capturaPositivos(arr) {
    let positivos = 0;
    for (elemento of arr) {
        if (elemento > 0)
            positivos++
    }
    return positivos
}

let resultado = capturaPositivos(array)
console.log(resultado);