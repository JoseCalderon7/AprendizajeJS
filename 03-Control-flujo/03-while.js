// cuales son los numeros pares

let i = 0;

while (i < 10) {
    if (i % 2 == 0) {
        console.log('Valor par: ', i);
        }
    i++ // incrementa el valor de la variable || si está dentro de la condición y este no se cumple puede haber un loop infinito
}

console.log('\n\n\nFuera del loop');