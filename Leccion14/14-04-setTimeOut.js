// LLAMADAS ASINCRONAS CON SETTIMEOUT
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg.');
}
setTimeout(miFuncionCallback, 3000);//3000 milisegundos = 3 segundos

setTimeout(function(){console.log('Saludo asincrono 4 seg')},4000);

setTimeout( () => console.log('Saludo asincrono 5 seg'),5000);
