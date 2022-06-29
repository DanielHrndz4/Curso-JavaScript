let promesa = new Promise((resolver)=>{
    setTimeout(()=> resolver('Saludos con promesa y timeout'), 3000);
});

//ASYC INDICA QUE UNA FUNCION REGRESA UNA PROMESA

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}
miFuncionConPromesa().then(valor => console.log(valor));