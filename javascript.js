function agregarComentario() {
    var comentario= document.getElementById("articulo").value;
    var loQueSea = comentario;
    document.getElementById("aquiQueda").innerHTML = loQueSea;
  }
function escribir(){
	var comentario= document.getElementById("articulo").value;
    var loQueSea = comentario;
    document.getElementById("aqui").innerHTML = loQueSea;
}

//Las siguientes tres funciones nos permiten cambiar el tamaño del texto
var min=8;
var max=30;
function increaseFontSize() {

   var p = document.getElementsByTagName('h6');
   for(i=0;i<p.length;i++) {

      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {

         var s = 30;
      }
      if(s!=max) {

         s += 1;
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
	alert("Dont touch me yet!");
}

function cambiarColor(){
	alert("Dont touch me yet!");
}

function alinearLeft(){
	var comentario= document.getElementById("articulo").value;
    var loQueSea = comentario;
    document.getElementById("aquiQueda").innerHTML = loQueSea;
}

function alinearCenter(){
	alert("Dont touch me yet!");
}

function alinearRight(){
	alert("Dont touch me yet!");
}
