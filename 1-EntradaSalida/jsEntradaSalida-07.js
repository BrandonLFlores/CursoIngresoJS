/*
Debemos lograr tomar Los numeros por ID,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resultado por medio de "ALERT"
ej.: "la Resta es 750"
Brandon Flores-Div X
*/ 
function sumar()
{
	let nroUno = parseInt(document.getElementById('txtIdNumeroUno').value);

	let nroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	let suma = nroUno + nroDos;

	alert("La suma es " + suma);
}

function restar()
{
	let nroUno = parseInt(document.getElementById('txtIdNumeroUno').value);

	let nroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	let resta = nroUno - nroDos;

	alert("La resta es " + resta);
}

function multiplicar()
{
	let nroUno = parseInt(document.getElementById('txtIdNumeroUno').value);

	let nroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	let multiplicacion = nroUno * nroDos;

	alert("La multiplicación es " + multiplicacion);	
}

function dividir()
{
	let nroUno = parseInt(document.getElementById('txtIdNumeroUno').value);

	let nroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	let division = nroUno / nroDos;

	alert("La división es " + division);
}