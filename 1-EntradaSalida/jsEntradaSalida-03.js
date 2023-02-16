/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Brandon Flores-Div X
*/
function mostrar()
{
	let nombreIngresado; //let: variable local

	//nombreIngresado = txtIdNombre.value

	nombreIngresado = document.getElementById('txtIdNombre').value;
	
	alert(nombreIngresado);
}