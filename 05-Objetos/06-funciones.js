// ! LAS FUNCIONES SON OBJETOS, Y SON OBJETOS DE PRIMERA CLASE (TIENEN PROPEDIADES, Y SE PUEDES ASIGNAR A OTRAS FUNCIONES)

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Pepe')


console.log(user);

function of(Fn, arg) {
    return new Fn(arg)
}

let user1 = of(Usuario, 'Juan');
console.log(user1);

function returned() {
    return function(){
        console.log('Hola Mundo!');
    }
}

let saludo = returned();
saludo();