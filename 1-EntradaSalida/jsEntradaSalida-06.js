/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Brandon Flores-Div X
*/
function sumar()
{
	let nroUno = parseInt(document.getElementById('txtIdNumeroUno').value);

	let nroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	let suma = nroUno + nroDos;

	alert(suma);
}