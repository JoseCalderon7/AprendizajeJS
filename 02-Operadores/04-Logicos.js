// AND, OR, NOT

// * AND && (ambos deben seguir los parametros)

console.log(true && true);
console.log(true && false);

let mayor = true;
let suscrito = false;
console.log('Operador AND ', mayor && suscrito);

// * OR || (es uno o lo otro)
console.log('Operador OR ', mayor || suscrito);

// * NOT ! (Para negar una variable)
console.log('Operador NOT ', !mayor);

// Para negar una variable o hacerla negativa como tal.
let catalogoPrivado = !mayor;
