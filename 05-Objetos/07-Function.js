
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function(){ console.log('Dibujando...');}
}

// * SIRVE PARA EXTENDER OBJETOS || FUNCIONES
let punto = {z : 6};

// ? FUNCIÓN DE "CALL" o "APPLY" PERMITE LLAMAR FUNCIONES A LAS QUE PODEMOS AUMENTAR OBJETOS DENTRO
Punto.call(punto, 1, 2); // ! METODOS
Punto.apply(punto, [1, 2]); // ! METODOS
console.log(punto);

// * PODEMOS REUTILIZAR CÓDIGO.....

// ! NO UTILIZAR ESTA FORMA, NO ES RECOMENDABLE, PERO SI ES POSIBLE VERLO EN CODIGOS.
// const Point = new Function('x', 'y', `
// this.x = x;
// this.y = y;
// this.dibujar = function(){ console.log('Dibujando...'); }
// `);

// const p = new Point(1, 2);
// console.log(p);