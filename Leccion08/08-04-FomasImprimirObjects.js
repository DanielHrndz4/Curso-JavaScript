let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}
//FORMA 1
console.log(persona.nombreCompleto() +" "+persona.email+" "+persona.edad)
//FORMA 2
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}
//FORMA 3
let personaArray = Object.values(persona);
console.log(personaArray);
//FORMA 4
let personaString = JSON.stringify(persona);
console.log(personaString);