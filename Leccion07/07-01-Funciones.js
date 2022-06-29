//LLAMAR LA FUNCION ANTES DE DECLARARLA (Hoisting)
miFuncion(2, 6);

//DECLARACION DE LA FUNCION
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}
//LLAMAR LA FUNCION
miFuncion(2, 3);