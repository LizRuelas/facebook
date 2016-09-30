window.addEventListener("load", cargar);

var contador = 1 ;

function cargar(){
	var btn = document.getElementById("btn");
	btn.addEventListener("click", mostrarPublicaciones);
}

function mostrarPublicaciones(evento){
	evento.preventDefault();

	var texto = document.getElementById("publicacion");
	var contenedor = document.getElementById("publicaciones");

	var boxPublicacion = document.createElement("div");
	boxPublicacion.classList.add("box");

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "checkbox" + contador;
	checkbox.addEventListener("click",tachado);

	var label = document.createElement("label");
	label.setAttribute = ("for","checkbox"+ contador);
	label.textContent = texto.value;

	var tacho = document.createElement("span");
	tacho.setAttribute("class","glyphicon glyphicon-trash pull-right");
	tacho.addEventListener("click", eliminarTarea);

	boxPublicacion.appendChild(checkbox);
	boxPublicacion.appendChild(label);
	boxPublicacion.appendChild(tacho);

	contenedor.appendChild(boxPublicacion);

	contador++;
	texto.value= "";
}

function tachado(){
	this.nextSibling.classList.toggle("tachado");
}

function eliminarTarea(){
	var boxPublicacion = this.parentElement;
	boxPublicacion.parentElement.removeChild(boxPublicacion);
}












