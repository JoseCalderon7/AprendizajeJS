// * Funciones simples
function saludo(){
    console.log('Hola a todos!')
}
saludo();

function suma(){
    return 2 + 2;
}
// ! Solamente se puede llamar una funcion de retorno con una variable inicializada antes.

// Se necesita hacer las funciones más flexibles
let resultado = suma();

console.log(resultado)
console.log(suma())