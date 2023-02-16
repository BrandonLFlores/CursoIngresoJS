//Brandon Flores-Div X
function mostrar()
{
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	alert(mesDelAnio);

	switch(mesDelAnio)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para invierno");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
		break;
		default:
			alert("Ya pasamos el frío, ahora calor")
		break;
	}


}//FIN DE LA FUNCIÓN