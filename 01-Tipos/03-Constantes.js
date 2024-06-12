// El valor que tomará la variable con "let" será el ultimo editado
// const no puede cambiar su valor una vez ingresado su valor.

const nombre = "Hola mundo";
nombre = "Hola"
// * Resultado: Uncaught TypeError: Assignment to constant variable.
// !Me arroja error en la consola ya que no se puede alterar el valor de la variable

// let nombre = "Hola mundo"
// nombre = "Hola"

console.log(nombre)