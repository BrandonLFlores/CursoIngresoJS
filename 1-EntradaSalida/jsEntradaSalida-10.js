/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Brandon Flores-Div X
*/
function mostrarAumento()
{
	let importe = parseInt(document.getElementById("txtIdImporte").value);

	let descuento = importe * (25/100);

	document.getElementById("txtIdResultado").value = importe - descuento;
}