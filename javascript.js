function agregarComentario() {
    var comentario= document.getElementById("articulo").value; // o se puede hacer así var comentario=perrito.value con una funcion a la que nombramos function(perrito)
    var loQueSea = comentario;
    document.getElementById("aquiQueda").innerHTML = loQueSea;
    //var nuevoNodo=preview.cloneNode(true);
  }
function escribir(){
	var comentario= document.getElementById("articulo").value;
    var loQueSea = comentario;
    document.getElementById("aqui").innerHTML = loQueSea;
}
//Las siguientes tres funciones nos permiten cambiar el tamaño del texto
//tambien podemos hacer lo siguiente: function cambiarTexto(){var preview=document.getEelementById("preview") --Salto  preview.style.fontsize"48px" }
//Las siguientes tres funciones nos permiten cambiar el tamaño del texto
var min=8;
var max=30;
function increaseFontSize() {

   var p = document.getElementsByTagName('h6');
   for(i=0;i<p.length;i++) {

      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {

         var s = 15;
      }
      if(s!=max) {

         s += 15;
      }
      p[i].style.fontSize = s+"px"

   }
}
function decreaseFontSize() {
   var p = document.getElementsByTagName('h6');
   for(i=0;i<p.length;i++) {

      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {

         var s = 14;
      }
      if(s!=min) {

         s -= 1;
      }
      p[i].style.fontSize = s+"px"

   }
}

function mediumFontSize(){
	var comentario = document.getElementsById('aqui');
	comentario.style.fontSize = "20px"
}

function cambiarColor(){
	var comentario= document.getElementById("aqui");
	comentario.style.color=prompt("Color, escribe el nombre o el hexadecimal")

}

function alinearLeft(){
	var comentario= document.getElementById("aqui");
	comentario.style.textAlign="left";
}

function alinearCenter(){
	var comentario= document.getElementById("aqui");
	comentario.style.textAlign="center";
}

function alinearRight(){
	var comentario= document.getElementById("aqui");
	comentario.style.textAlign="right";
}

