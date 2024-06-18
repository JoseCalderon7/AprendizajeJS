/**
 * * validar que la posición no sea menor a cero y que el elemnto exista en el array [0, 1]
 */ 

// * Acá se valida que el indice y el 
function getByIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe'
    }
    return arr[idx]
}

let resultado = getByIdx([1, 2], 1);
console.log(resultado);