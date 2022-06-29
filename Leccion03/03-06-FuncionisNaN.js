let miNumero ="18d";
let edad= Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un numero.");
}
else{
    if (edad >= 18){
        console.log("Puedes votar.")
    }
    else{
        console.log("No puedes votar.")
    }
}