// * Crear algoritmo que devuelva el precio del producto más el impuesto

function precioFinal(precio, impuesto) {
    let total = 0
    total = ((precio * impuesto) + precio)
    return total
}

let resultado = precioFinal(19.90, 0.15)
console.log(resultado);