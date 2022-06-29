//FUNCION CALLBACK
function imprimir(mensaje) {
    console.log(mensaje);
}
function sumar(n1,n2,imprimir){
    let resultado = n1 + n2;
    imprimir(`Resultado: ${resultado}`);
}
sumar(3,1,imprimir);