//PROMESAS, ASYNC, AWAIT Y SETTIMEOUT
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver=>{
        console.log('Inicio de funcion...');
        setTimeout(()=>resolver('Promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();