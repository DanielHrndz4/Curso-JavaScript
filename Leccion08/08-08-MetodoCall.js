let persona1 = {
    nombre: 'Daniel',
    apellido: 'Hernandez',
    nombreCompleto: function (titulo, telefono){
        return titulo+" "+this.nombre+" "+this.apellido+" "+telefono;
    }
}
let persona2 = {
    nombre: 'Jonathan',
    apellido: 'Godoy'
}

//USO DE CALL
console.log(persona1.nombreCompleto('Ing.','71347214'));
console.log(persona1.nombreCompleto.call(persona2,'Lic.','71347214'));

