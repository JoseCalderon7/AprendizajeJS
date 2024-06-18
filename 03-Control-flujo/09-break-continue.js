
let i = 0;

// * SE PUEDE UTILIZAR PARA CUALQUIER FOR, EL CONTINUE - BREAK
while (i < 6) {
    i++
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}