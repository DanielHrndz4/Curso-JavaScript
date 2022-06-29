// JavaScript Document



function sumar(resultado){
	var uno = parseInt(document.getElementById('numeroUno').value);
	var dos = parseInt(document.getElementById('numeroDos').value);
	var resultado = uno + dos;
	console.log(resultado)
	var rfinal = document.getElementById("resultado").innerHTML = 'El resultado es ' + resultado; 	
}
 
	