'use strict'

try {
    let x=10;
    throw 'Mi error';
}catch(error) {
    console.log(error);
}finally {
    console.log('Siempre se ejecuta...')
}
console.log('Continuamos...')

let resultado = 'Hello world!';
try {
    if (isNaN(resultado)) throw 'No es un numero...';
    else if (resultado === "") throw 'No es un numero...';
    else if (resultado === true | resultado === false) throw 'No es un numero...';
    else if (resultado < 0 ) throw 'Debe digitar un valor positivo...'
}catch(error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}

try {
    x=10
    if (isNaN(resultado)) throw 'No es un numero...'
}catch(error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}