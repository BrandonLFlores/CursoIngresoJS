//Brandon Flores-Div X
function mostrar()
{
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	alert(mesDelAnio);

	switch (mesDelAnio)
	{
		case "Enero":
			alert("Que comiences bien el año");
		break;
		case "Marzo":
			alert("A clase");
		break;
		case "Julio":
			alert("Se acercan las vacaciones");
		break;
		case "Diciembre":
			alert("Felices Fiestas");
		break;
		default:
			alert("No te digo nada");
		break;
	}

}//FIN DE LA FUNCIÓN