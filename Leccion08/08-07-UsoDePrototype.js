function Persona(nombre, apellido, noTelefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}
Persona.prototype.noTelefono = '71347214';

let padre = new Persona('Daniel','Hernandez');
console.log(padre.nombreCompleto()+" "+Persona.prototype.noTelefono);

let madre = new Persona('Jacqueline','Nereyda');
console.log(madre.nombreCompleto()+" "+Persona.prototype.noTelefono);

let hijo = new Persona('Jonathan','Godoy');
hijo.noTelefono = '71882480'
console.log(hijo.nombreCompleto()+" "+hijo.noTelefono);