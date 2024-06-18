
let user = {
    id: 1,
    name: 'Juan',
    age: 20
};

// * Lista de manera correcta lo que necesitamos en un set de datos
for (let prop in user) {
    console.log(prop, user[prop]);
}

// ! NO UTILIZARLO AL RECORRER EN ARRAYS (SOLO PARA CASOS PARTICULARES) = for in 
let animales = ['Perro', 'Gato', 'Pajaro']
for (let primero in animales) {
    console.log(primero, animales[primero]);
}