let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    //AGREGAR METODOS A OBJETOS
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    },
    emailEdad: function(){
        return this.email +" "+" Edad: "+this.edad;
    }
}

console.log(persona.nombre+" "+persona.apellido);
console.log(persona.email);
console.log(persona.edad);

console.log(persona.nombreCompleto());
console.log(persona.emailEdad());

//CREACION DE OBJETOS

let persona2 = new Object();//NUEVO OBJETO EN MEMORIA
persona2.nombre = 'Daniel';
persona2.apellido = 'Hernandez';
persona2.email = 'danielhrndz38@gmail.com';
persona2.numeroTelefono = '71347214';

function personaFuncion(){
    return persona2.nombre+" "+persona2.apellido+" "+persona2.email;
}
console.log(personaFuncion())
