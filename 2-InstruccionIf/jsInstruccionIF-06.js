//Brandon Flores-Div X
function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17){
		alert("Usted es mayor de edad.");
	}
	else{
		if (edad >= 13 && edad <= 17){
		alert("Sos un adolescente.");
		}
		else{
			alert("Sos un niño");
		}
	}
}//FIN DE LA FUNCIÓN