//Brandon Flores-Div X
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;

	while (contador < 5)
	{
		contador = contador + 1;
		numeroIngresado = parseFloat(prompt("Ingrese un número"));
		acumulador = acumulador + numeroIngresado;
	}
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/5;
}//FIN DE LA FUNCIÓN