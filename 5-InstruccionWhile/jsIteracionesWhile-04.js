/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Brandon Flores-Div X
*/
function mostrar()
{
	let numeroIngresado = parseFloat(prompt("Ingrese un número entre 0 y 10."));

	while (numeroIngresado >= 10 || numeroIngresado <= 0)
	{
		numeroIngresado = parseFloat(prompt("Ingrese un número entre 0 y 10"));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN