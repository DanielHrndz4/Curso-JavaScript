async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}
//miFuncionConPromesa().then(valor => console.log(valor));

//ASYNC & AWAIT
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver=>{
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
funcionConPromesaYAwait();