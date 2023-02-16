//Brandon Fores-Div X
function mostrar()
{
	var destinoIngresado = txtIdDestino.value;

	alert(destinoIngresado);

	switch (destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			alert("Aquí hace frío");
		break;
		case "Mar del plata":
		case "Cataratas":
			alert("Aquí hace calor");
		break;
	}

}//FIN DE LA FUNCIÓN