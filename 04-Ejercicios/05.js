/**
 * Crear un algoritmo que devuelva número menor y mayor de un array.
 */

// * Lista de números
let array = [2, 5, 7, 15, -5, -100, 55];

// * esta función será para que una vez le entreguemos un array, nos muestre el menor y mayor numero del array
function obtenerMenorMayor(arr) {

    // * Declaro estas variables para no colocar 0, sino habría un error.
    let menor = arr[0];
    let mayor = arr[0];

    // * Itero todos los numeros del array
    for (numero of arr) {

        // * Si menor es menor que numero se mantiene, sino, se actualiza
        menor = menor < numero ? menor : numero;

        // * Si mayor es mayor se mantiene, si es menor, se actualiza.
        mayor = mayor > numero ? mayor : numero;
    }

    // * Retornan ambos valores
    return [mayor, menor];
}

// * Hago el llamado de la función junto a su parametro, que ahora es llamado argumento.
let numeros = obtenerMenorMayor(array)
console.log(numeros);