const inputTexto = document.querySelector(".entrada");
const mensaje = document.querySelector(".texto");
var divImage = document.querySelector("#myDiv");
var botonC = document.querySelector("#botonC");

function btnencriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	divImage.style.display = "none";
	botonC.style.display = "block";
	inputTexto.value = "";
}

function encriptar(stringParaEncriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]]
	stringParaEncriptar = stringParaEncriptar.toLowerCase();
	for (let i=0; i< matrizCodigo.length; i++){
		if(stringParaEncriptar.includes(matrizCodigo[i][0])){
			stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}

	return stringParaEncriptar;
}



function btndesencriptar() {
	const textoDesncriptado = desencriptar(inputTexto.value);
	mensaje.value = textoDesncriptado;
	divImage.style.display = "none";
}


function desencriptar(stringParaDesencriptar){
	let matrixCodigo = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]]
	stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
	for (let i=0; i< matrixCodigo.length; i++){
		if(stringParaDesencriptar.includes(matrixCodigo[i][0])){
			stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
		}
	}
	return stringParaDesencriptar;
}


function copiar ()
{
	let copyText = document.querySelector("#textoCopy");
	let pasteText = document.querySelector("#entrada");
	copyText.select();
	document.execCommand("copy");
	pasteText.value	= copyText.value;

}

function pegar ()
{
	
}

botonC.onclick = copiar ;