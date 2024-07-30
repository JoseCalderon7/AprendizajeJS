
const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console. log( 'dibujando');
    }
}

// delete punto.dibujar;

// ! PODEMOS VERIFICAR SI ES QUE UN OBJETO TIENE ALGUNA PROPIEDAD O METODO EN PARTICULAR
if ('dibujar' in punto){
    punto.dibujar();
}


// ! NOS RETORNA UN ARRAYS CON LAS PROPIEDADES
// let keys = Object.keys(punto);
// console.log(Object.keys(punto));

// * CON "KEYS" Y "OF" PODEMOS ITERAR UN ARRAY
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

// * CON "ENTRIES" Y "OF" PODEMOS ITERAR UN ARRAY JUNTO A SUS PROPIEDADES | VALOR.
for (let entry of Object.entries(punto)){
    console.log(entry);
}

// * MISMA FORMA QUE EN |CON "KEYS" Y "OF"|
// ! FUNCIONALIDAD NUEVA
for (let llave in punto){
    console.log(llave, punto[llave]);
}