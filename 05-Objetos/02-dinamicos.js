
// * Si bien, no podemos cambiar la variable como tal, si podremos cambiar el contenido de este.

// * Podemos cambiar todo el contenido del objeto
const user = {id: 1};

user.name = 'Juan'
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();
console.log(user);

// * Podemos borrar todo contenido del objeto
delete user.name;
delete user.guardar;
console.log(user); 

// * No podemos cambiar el contenido de este
// const user1 = Object.freeze({ id: 1})
// user1.name = 'Juan'
// user1.id = 2

// * Podemos cambiar el contenido que ya existe (no agregar, ni quitar, solo cambiar)
const user1 = Object.seal({ id: 1})
user1.name = 'Juan'
user1.id = 2

console.log(user1);

// * NOTAS: 
// * Si nosotros creamos un objeto podemos cambiarle todas sus propediates, independiente que use "const".
// * Si no queremos que se cambien sus propiedades en ese caso debemos usar "Object.freeze".
// * Si queremos que se cambien sus propiedades "FIJAS" en ese caso debemos usar "Object.seal".