/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Brandon Flores-Div X
*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero = "Es el primero";
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta = "si";

	while (respuesta=="si")
	{
		numeroIngresado = parseFloat(prompt("Ingrese un número"));
		respuesta = prompt("¿Quieres continuar?");
		
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimmo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN