//CONSTRUCTORES
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido =apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}

let padre = new Persona('Daniel','Hernandez','danielhrndz38@gmail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Jacqueline','Godoy','jacquelinedehernandezjh@gmail.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Jonathan';
console.log(padre.nombreCompleto()+" "+padre.email);


let miObjeto = new Object();
//SINTAXIS MAS UTILIZADA
let miObjeto2= {};

let cadena1 = new String('Hola mundo')
//SINTAXIS MAS UTILIZADA
let cadena2 = 'Hola mundo';

let numero1 = new Number(1);
//SINTAXIS MAS UTILIZADA
let numero2 = 1;

let arreglo1 = new Array();
//SINTAXIS MAS UTILIZADA
let arreglo2 = [];

let funcion = new Function();
//SINTAXIS MAS UTILIZADA
let function2 = function(){};