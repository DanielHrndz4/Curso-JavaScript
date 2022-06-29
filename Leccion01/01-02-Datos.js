//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato entero
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre : "Daniel",
    apellido : "Hernandez",
    telefono : "123456"
}
console.log(objeto)

//Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);
console.log(bandera)

//Tipo de dato function
function funcion(){}
console.log(typeof funcion);
console.log(funcion);

//Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo)
console.log(simbolo)

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(typeof Persona);
console.log(Persona);

//Tipo undefined
var x;
console.log(x);

//Null = ausencia de valor
var y = null;
console.log(y);
