//PASO POR VALOR
let x =10;//TIPO PRIMITIVO

function cambiarValor(a){
    a=20;
}
cambiarValor(x);
console.log(x);
//console.log(a)

//PASO POR REFERENCIA
const persona = {
    nombre: 'Juan',
    apellidos: 'Perez'
}
function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellidos = 'Hernandez';
}
cambiarValorObjeto(persona)
console.log(persona);