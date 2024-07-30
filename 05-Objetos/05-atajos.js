
// Esto es un atajo
// ! OBJECT NO ES EL ÚNICO CONSTRUCTOR EN JAVASCRIPT
let obj = {};
let obj2 = new Object();

/* * OTRA FORMA DE PODER CREAR OBJECTOS
* new Array(); []
* mew String(); "" '' ´´ || PODEMOS USAR VALUEOF ACÁ
* new Number(); 12, -1, 4  || PODEMOS USAR VALUEOF ACÁ
* new Boolean(); true - false || PODEMOS USAR VALUEOF ACÁ
*/ 

function Usuario() {
    this.name = 'Pepe';
}

let user = new Usuario()
console.log(user.constructor);

//* typeof ""
//? 'string'
//* typeof 44444
//? 'number'
//* typeof new Number()
//! 'object'
//* typeof new Boolean()
//! 'object'
//* typeof new String()
//! 'object'


const s1 = "1 + 1"; // LITERAL
const s2 = new String("1 + 1"); // CONSTRUCTOR

console.log('Primer ejemplo: \n',s1, s2);
console.log('Segundo ejemplo: \n',eval(s1), eval(s2));
console.log('Tercer ejemplo: \n',s1.valueOf(), s2.valueOf()); // ! NOS DEVUELVE COMO STRING LITERAL EL CONTRUCTOR