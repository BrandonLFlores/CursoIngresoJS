/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Brandon Flores-Div X
*/
function mostrar()
{
	let contador = 0;
	let respuesta = "si";
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
	let numeroPositivo;
	let numeroNegativo;

	while (respuesta == "si")
	{
		contador = contador + 1;
		numeroPositivo = parseFloat(prompt("Ingrese un número positivo"));
		numeroNegativo = parseFloat(prompt("Ingrese un número negativo"));
		respuesta = prompt("¿Quieres seguir?");
		sumaPositivos = sumaPositivos + numeroPositivo;
		multiplicacionNegativos = multiplicacionNegativos * numeroNegativo;
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN