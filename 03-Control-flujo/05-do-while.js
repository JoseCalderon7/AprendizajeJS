
let i = 0;

// * Se espera que i sea menor que 10 || SE EVALUA PRIMERO LA CONDICIÓN, SI SE CUMPLE, SE EJECUTA LA PORCIÓN DE CÓDIGO
while (i < 3) {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
    i++
}
console.log('Fuera del while');

// * EJECUTA PRIMERO LA PORCIÓN DE CÓDIGO Y LUEGO EVALUA LA CONDICIÓN, Y SI SE CUMPLE VUELVE A EJECUTARSE
do {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
    i++
} while (i < 10);
console.log('Fuera del do-while');