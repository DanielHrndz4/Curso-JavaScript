let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}
//AGREGAR
persona.telefono = '71882480';
console.log(persona);

//ELIMINAR
delete persona.edad;
console.log(persona);
