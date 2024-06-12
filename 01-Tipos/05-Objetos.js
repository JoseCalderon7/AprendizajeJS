// Caracteristicas de una persona
let nombre = "Javier"
let apellido = "Soto"
let edad = 24;

// "{}" Objeto literal (se crea un objeto solo con esa sintaxis) 
let persona = {
    nombre: nombre,
    apellido: "Soto",
    edad: 24,
};

console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);


persona.edad = 20;
persona['edad'] = 22;

// console.log(persona['edad']);

// Elimina el contenido de apellido
delete persona.apellido;

// No aparece el apellido de la persona
console.log(persona)