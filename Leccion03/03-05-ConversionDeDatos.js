let edad = "17";
edad = Number(edad);
console.log(typeof edad);
if (edad >= 18){
    console.log("Puedes votar")
}
else{
    console.log("Muy joven para votar")
}

//Ejercicio utilizando el operador ternario
edad = "18";
edad = Number(edad);
let resultado = (edad >= 18) ? "Puedes votar" : "Muy joven para votar";
console.log(resultado);