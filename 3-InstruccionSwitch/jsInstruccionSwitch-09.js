//Brandon Flores-Div X
function mostrar()
{
	var estacion = txtIdEstacion.value;
	let destino = txtIdDestino.value;
	let estadia = 15000;
	let porcentaje = 0;
	let precioFinal;
	let mensaje;

	alert(estacion + " / " + destino);

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = 20;
					mensaje;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					mensaje;
				break;
				case "Mar del plata":
					porcentaje = -20;
					mensaje;
				break;
			}
		break;
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = -20;
					mensaje;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					mensaje;
				break;
				case "Mar del plata":
					porcentaje = 20;
					mensaje;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Catarataa":
				case "Mar del plata":
					porcentaje = 10;
					mensaje;
				break;
				case "Cordoba":
					porcentaje = 0;
					mensaje;
				break;
			}
		break;
	}

	precioFinal = estadia + (estadia * porcentaje/100);
	mensaje = alert("El precio a pagar es de " + precioFinal);
}//FIN DE LA FUNCIÓN
