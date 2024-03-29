class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido =apellido;
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
    nombreCompleto(){ 
        return this._nombre +" "+ this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){ 
        return super.nombreCompleto()+", "+this._departamento;
    }
}
let persona1 = new Persona('Daniel','Hernandez');
console.log(persona1);

let empleado = new Empleado('Daniel','Hernandez','Programacion');
console.log(empleado);
console.log(empleado.nombreCompleto());
console.log(persona1.nombreCompleto());
console.log(empleado.toString());
