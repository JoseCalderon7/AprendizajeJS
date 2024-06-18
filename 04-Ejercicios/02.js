
function nombreResolucion(ancho, alto) {

        // ! ejemplo con switch, muy complejo para su lectura  
        // switch (`${ancho}x${alto}`) {
        //     case '7680x4320':
        //         console.log('Resolución 8K');
        //         break;
        //     case '3840x2160':
        //         console.log('Resolución 4K');
        //         break;
        //     case '2560x1440':
        //         console.log('Resolución WQHD');
        //         break;
        //     case '1920x1080':
        //         console.log('Resolución FHD');
        //         break;
        //     case '1280x720':
        //         console.log('Resolución HD');
        //         break;
        //     default:
        //         console.log('Medidas no reconocidas');
        //         break;
        // }
    
    // * Forma correcta de realizar este problema
    // ? Acá pasa algo distinto, cuando yo hago un log dentro se comienza a ejecutar la instrucción por fuera
    // ? y por ende me da este problema de undefined, ya que con return es cuando puedo traer el valor. 
    if (ancho === 7680 & alto === 4320) {
        return 'Resolución 8K';
    } else if (ancho === 3840 & alto === 2160) {
        return 'Resolución 4K';
    } else if (ancho === 2560 & alto === 1440) {
        return 'Resolución WQHD';
    } else if (ancho === 1920 & alto === 1080) {
        return 'Resolución FHD';
    } else if (ancho === 1280 & alto === 720) {
        console.log('Resolución HD'); // ejemplo del undefined
    } else {
        console.log('Medidas no reconocidas');
        return false;
    }
}

let dimensiones = nombreResolucion(1280, 720)
console.log(dimensiones);