//Brandon Flores-Div X
function mostrar()
{
	//tomo la edad
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 17){
		alert("NO sos un adolescente.");
	}

}//FIN DE LA FUNCIÓN