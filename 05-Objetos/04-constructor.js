
// ! DEBEMOS UTILIZAR SIEMPRE UPPERCASE (ESPECIAL PARA "CONSTRUCTORES")

// {id: 1, recuperandoClave: funcion(){}}
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { // ! METODOS
        console.log('recuperando clave...');
    }
}

// * ACÁ SE UTILIZA NEW YA QUE ESTA PROPIEDAD HARÁ QUE TODO EL CONTENIDO DE LA FUNCIÓN CON THIS 
// * TOME ESOS VALORES Y PODAMOS RETORNARLOS, Y ASÍ, SE MUESTRA EN CONSOLA.
let usuario = new Usuario();

console.log(usuario);