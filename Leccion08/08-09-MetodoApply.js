let persona1 = {
    nombre: 'Katherine',
    apellido: 'Lopez',
    nombreCompleto: function(titulo, telefono) {
        return titulo+" "+this.nombre+ " " + this.apellido+" "+telefono;
    }
}

let persona2 = {
    nombre: 'Lissette',
    apellido: 'Ramirez'
}

console.log(persona1.nombreCompleto('Lic.','71347214'));
let arreglo = ['Ing','71882480'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));