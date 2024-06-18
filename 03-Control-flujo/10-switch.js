
let accion = 'Listar';

// * SON PARA COMPARAR CON EL PRIMER PARENTESIS Y LUEGO EN CADA OPCIÓN REALIZARÁ UNA ACCIÓN SEGÚN NUESTRO CÓDIGO
switch (accion) {
    case 'Listar':
        console.log('Accion de listar');
        break;
    case 'Guardar':
        console.log('Accion de Guardar');
        break;
    case 'Borrar':
        console.log('Accion de Borrar');
        break;
    default:
        console.log('Accion no reconocida');
}

// * En caso de utilizar el IF es muy parecido pero esta vez se compara cada valor directo con el valor del parentesis