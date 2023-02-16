//Brandon Flores-Div X
function mostrar()
{
	var estacion =txtIdEstacion.value;
	let destino = txtIdDestino.value;
	let mensaje;

	alert(estacion + " / " + destino);

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
				break;
				default:
					mensaje = "No se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
				break;
				default:
					mensaje = "No se viaja";
				break;
			}
		break;
		case "Otoño":
			mensaje = "Se viaja";
		break;
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					mensaje = "No se viaja";
				break;
				default:
					mensaje = "Se viaja";
				break;
			}
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN