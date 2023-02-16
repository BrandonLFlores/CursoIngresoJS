//Brandon Flores-Div X
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let minimo = 1;

	let maximo = 10;

	numRandom = Math.round(Math.random() * (maximo - minimo) + minimo);

	if (numRandom >= 9){
		alert("Tu nota es " + numRandom + ". EXCELENTE");
	}else if (numRandom > 4){
		alert("Tu nota es " + numRandom + ". APROBÓ");
	}else if (numRandom < 4){
		alert("Tu nota es " + numRandom +". Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN