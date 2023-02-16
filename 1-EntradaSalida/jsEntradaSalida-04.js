/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Brandon Flores-Div X
*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado = prompt('Nombre');

	document.getElementById('txtIdNombre').value = nombreIngresado;
}