/*
Debemos lograr tomar el importe por ID,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Brandon Flores-Div X
*/
function mostrarAumento()
{
	let importe = parseInt(document.getElementById("txtIdSueldo").value);

	let aumento = importe * (10/100);

	document.getElementById("txtIdResultado").value = importe + aumento;
}