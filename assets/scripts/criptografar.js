// dom
var criptBttn = document.getElementById("button#cript-bttn");
var descriptBttn = document.getElementById("button#descript-bttn");
var copyBttn = document.getElementById("button#copy-bttn");
var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

// criptografar
function criptografa() {
  if (texto.value.length == 0) {
    return (saida.innerHTML = "Nenhuma mensagem foi encontrada.");
  } else {
    var text = texto.value;
    var txt = text.replace(/e/g, "enter");
    var txt = txt.replace(/i/g, "imes");
    var txt = txt.replace(/a/g, "ai");
    var txt = txt.replace(/o/g, "ober");
    var txt = txt.replace(/u/g, "ufat");

    saida.innerHTML = `${txt}`;
  }
}