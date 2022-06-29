let miFuncion = function(){
    console.log('Saludos desde mi funcion')
}
// const miFuncionFlecha = () => {
//     console.log('Saludos desde la funcion flecha')
// }

//NO SE APLICA EL HOISTING

const miFuncionFlecha = () => console.log('Saludos desde la funcion flecha');
miFuncionFlecha();

// const saludar = () =>{
//     return 'Saludos desde la funcion saludar'
// }
// console.log(saludar())

const saludar = () => console.log('Saludos desde la funcion saludar');
saludar();

const regresar = () => ({nombre: 'Daniel',apellido:'Hernandez'});
console.log(regresar());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Parametro');