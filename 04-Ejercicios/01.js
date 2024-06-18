function cualEsMayor(a, b) {

    // * Primera forma

    // if (a > b) {
    //     return a
    // } else {
    //     return b
    // }

    // * Segunda forma
    return a > b ? a : b
}

let mayor = cualEsMayor(111, 50);

console.log(mayor);