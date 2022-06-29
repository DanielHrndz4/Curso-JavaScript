// USO DE BREAK
for(let i = 0; i < 4; i++){
    if(i % 2 == 0){
        console.log(i);
        break;
    }
}
//USO DE CONTINUE
for(let j = 0; j <= 10; j++){
    if(j % 2 !== 0){
        continue;//IR A LA SIGUIENTE ITERACION
    }
    else{
        console.log(j)
    }
}
