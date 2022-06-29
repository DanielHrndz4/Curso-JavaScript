let numero = 3;
if(numero ==1){
    console.log("Numero uno")
}
else if(numero ==2){
    console.log("Numero dos")
}
else if(numero ==3){
    console.log("Numero tres")
}
else{
    console.log("Error valor no definido")
}

// EJERCICIO ESTACION DEL AÑO
let mes = 12;
let estacion;
if (mes==1||mes==2||mes==12){
    estacion = "Invierno"
}
else if (mes==3||mes==4||mes==5){
    estacion = "Primavera"
}
else if (mes==6||mes==7||mes==8){
    estacion = "Verano"
} 
else if (mes==9||mes==10||mes==11){
    estacion = "Otoño"
}
else{
    console.log("Error valor no definido")
}
console.log(estacion)

//EJERCICIO HORA DEL DIAN

let hora = 7;
let saludo;
if(hora >= 6 && hora <= 11){
    saludo = "Buenos Dias";
}
else if(hora >= 12 && hora <=18){
    saludo = "Buenas Tardes";
 }
else if(hora >= 19 && hora <= 24){
    saludo = "Buenas Noches";
}
else if(hora >= 0 && hora <=6){
    saludo = "Durmiendo";
}
else{
    saludo = "Error, hora no valida";
}
console.log(saludo);