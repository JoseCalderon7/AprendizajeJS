// ! PARA NO HACERLO TAN REPETITIVO, VAMOS A CREAR UNA FUNCIÓN PARA PODER CREAR USUARIOS
// ! Y CREAR UNA ESPECIE DE DINAMISMO EN EL CÓDIGO
// let user = {
//     id: 1,
//     email: 'example@gmail.com',
//     name: 'Juan',
//     activo: true,
//     recuperarClave: function(){
//         console.log('recuperando clave...');
//     },
// };


// ! CREAR OBJETOS CON LA MISMA ESTRUCTURA, TAL COMO SE MUESTRA A CONTINUACIÓN
// ? SI QUEREMOS QUE CAMBIEN, PODEMOS AGREGAR MÁS PROPIEDADES EN LOS ARGUMENTOS DE LAS FUNCIONES
function crearUsuarios(name, email) {
    return {
        email: email,
        name: name,
        activo: false,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    }
}

let user1 = crearUsuarios('Nico', 'example@gmail.com')
let user2 = crearUsuarios('Pepe', 'example111@gmail.com')

console.log(user1, user2);