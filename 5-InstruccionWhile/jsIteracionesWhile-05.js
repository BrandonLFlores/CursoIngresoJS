/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Brandon Flores-Div X
*/
function mostrar()
{
	let sexoIngresado = prompt("Ingrese f ó m.");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Ingrese f ó m.")
	}

	switch (sexoIngresado)
	{
		case "f":
			document.getElementById("txtIdSexo").value = "femenino";
		break;
		case "m":
			document.getElementById("txtIdSexo").value = "masculino";
		break;
	}
}//FIN DE LA FUNCIÓN