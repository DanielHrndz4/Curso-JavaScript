const autos = ['BMW', 'MERCEDES', 'VOLVO'];  
console.log(autos);

//ACCEDER A ARREGLOS
console.log(autos [0] + " y " + autos[2])

for(let i = 0; i < autos.length; i++){
    console.log(i + ": " + autos[i]);
}

//MODIFICAR ARREGLOS
autos[0] = 'GEO METRO';
console.log(autos);

//AGREGAR ELEMENTOS
autos.push('AUDI');
console.log(autos)
console.log(autos.length) 

autos[autos.length] = 'CADILLAC';
console.log(autos)
console.log(autos.length)

autos[6] = 'PORSHE';
console.log(autos)
console.log(autos.length)

//PREGUNTAR SI ES UN ARRAY
console.log(Array.isArray(autos))
console.log(autos instanceof Array)