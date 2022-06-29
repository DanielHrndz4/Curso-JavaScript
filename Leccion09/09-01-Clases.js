//EN CLASES NO SE PUEDE UTILIZAR HOISTING
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Daniel','Godoy');
console.log(persona1);

let persona2 = new Persona('Katherine','Lopez');
console.log(persona2);

persona1.nombre = 'Jonathan Daniel';//SET NOMBRE
console.log(persona1.nombre);//GET NOMBRE

