class Persona{
    static contadorPersonas = 1;
    constructor(nombre,apellido,edad){
        this._idPersona = Persona.contadorPersonas++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
  
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return "ID Persona: "+this._idPersona+" | "+"Nombre: "+this._nombre+" | "+"Apellido: "+this._apellido+" | "+"Edad: "+this._edad+" | ";
    }
    toString(){
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado =this._idPersona;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return super.toString()+"ID Empleado: "+this._idEmpleado+" | "+"Sueldo: "+this._sueldo;
    }
}
class Clientes extends Empleado {
    constructor(nombre,apellido,edad,sueldo,fechaRegistro){
        super(nombre,apellido,edad,sueldo);
        this._fechaRegistro = fechaRegistro;
        this._idClientes = this._idPersona;
    }
    get idClientes(){
        return this._idClientes;
    }
    get fechaRegistro(){
        this._fechaRegistro = fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fecha = fechaRegistro;
    }
    toString(){
        return super.toString()+" | "+"id Clientes: "+this.idClientes+" | "+"Fecha de Registro: "+this._fechaRegistro;
    }
}
let lectura = new Clientes('Daniel','Hernandez',18,300.00,new Date());
console.log(lectura.toString());

let lectura2 = new Clientes('Daniel','Hernandez',18,300.00,new Date());
console.log(lectura2.toString());

let lectura3 = new Clientes('Daniel','Hernandez',18,300.00,new Date());
console.log(lectura3.toString());

let lectura4 = new Clientes('Daniel','Hernandez',18,300.00,new Date());
console.log(lectura4.toString());

let lectura5 = new Clientes('Daniel','Hernandez',18,300.00,new Date());
console.log(lectura5.toString());