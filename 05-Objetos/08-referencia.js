// * PRIMITIVOS = SE COPIAN
// * REFERENCIA = SE REFERENCIAN | OBJETOS, ARRAYS, FUNCIONES |

// ! EJEMPLO 1
let a1 = {};
let b = a1;

b.prop = 1;
console.log(a1, b);


// ! EJEMPLO 2 | FUNCIONES
let a2 = 1;

function suma(m){
    m.prop++;
}

suma(a2);
console.log(a2);


// ! EJEMPLO 3
let a = {prop: 1};

// * los objetos se pasan por referencia
function suma(n){
    n.prop++;
}

suma(a);
console.log(a);