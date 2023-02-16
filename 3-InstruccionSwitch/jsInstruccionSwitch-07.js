//Brandon Fores-Div X
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	alert(destinoIngresado);

	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("Se encuentra en el Oeste");
		break;
		case "Cataratas":
			alert("Se encuentra en el Norte");
		break;
		case "Mar del Plata":
			alert("Se encuentra en el Este");
		break;
		case "Ushuaia":
			alert("Se encuentra en el Sur");
		break;
	}

}//FIN DE LA FUNCIÓN