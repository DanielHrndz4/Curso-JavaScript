const sumarFlecha = (a, b) => a + b;
let resultado = sumarFlecha(2, 5);
console.log(resultado);

//PARAMETROS Y ARGUMENTOS
function sumar(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b + arguments[1];
}
resultado = sumar(1, 5);
console.log(resultado);