//FUNCION SELF INVOKING 
(function (a, b, c, d, e, f, g, h){
    console.log(arguments.length)
    console.log('Ejecutando la funcion: '+ (a+b+c+d+e+f+g+h));
})(4,5,5,7,8,9,10,11,12,13,14,);

function miFuncion(){
    return;
}
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

