class Persona{
    static contadorPersonas = 1;
    static get MAC_OBJ(){
        return 5;//POR EL GET NO SE PUEDE MODIFICAR
    }
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas <= Persona.MAC_OBJ){
            this.idPersona = Persona.contadorPersonas++;
        }
        else{
            console.log("Nivel de personas superado...")
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido =apellido; 
    }
    nombreCompleto(){
        return "ID: "+this.idPersona+" | "+"Nombre: "+this._nombre+" | "+"Apellido: "+this._apellido;
    }
}
let persona1 = new Persona('Daniel','Hernandez');
console.log(persona1.nombreCompleto());

let persona2 = new Persona('Jonathan','Hernandez');
console.log(persona2.nombreCompleto());

let persona3 = new Persona('Katherine','Lopez');
console.log(persona3.nombreCompleto());

let persona4 = new Persona('Lissette','Ramirez');
console.log(persona4.nombreCompleto());

let persona5 = new Persona('Daniel','Hernandez');
console.log(persona5.nombreCompleto());

let persona6 = new Persona('Daniel','Hernandez');
console.log(persona6.nombreCompleto());

console.log(Persona.MAC_OBJ);

