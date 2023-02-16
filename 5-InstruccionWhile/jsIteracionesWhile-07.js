/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Brandon Flores-Div X
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let respuesta = "si";
	let numeroIngresado;

	while (respuesta == "si")
	{
		contador = contador + 1;
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		respuesta = prompt("¿Quieres seguir?");
		acumulador = acumulador + numeroIngresado;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/contador;
}//FIN DE LA FUNCIÓN