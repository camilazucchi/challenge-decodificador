var criptBttn = document.getElementById("button#cript__bttn");
var descriptBttn = document.getElementById("button#descript__bttn");
var copyBttn = document.getElementById("button#copy__bttn");
var texto = document.querySelector("textarea#main__input");
var saida = document.querySelector("p#main__output");

function criptografaTexto() {
  var text = texto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saida.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (texto.value === '') {
    saida.innerHTML = 'O campo está vazio.'
  } else {
    var txt = text.replace(/e/g, "enter");
    var txt = txt.replace(/i/g, "imes");
    var txt = txt.replace(/a/g, "ai");
    var txt = txt.replace(/o/g, "ober");
    var txt = txt.replace(/u/g, "ufat");

    saida.innerHTML = `${txt}`;
  }
}