//OPERADOR AND
let a = 5;
let valMin =0, valMax =10;
if(a >= valMin && a <= valMax){
    console.log("Dentro de rango")
}
else{
    console.log("Fuera de rango")
}

//OPERADOR OR
let vacasiones = false, diaDescanso = false;
if(vacasiones == true || diaDescanso == true){
    console.log("Si puede ir al partido de su hijo")
}
else{
    console.log("El padre esta ocupado")
}

//OPERADOR TERNARIO
let resultado = (4 > 12) ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 12;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);
