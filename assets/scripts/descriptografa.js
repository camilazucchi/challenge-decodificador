var descriptBttn = document.getElementById("button#descript-bttn");
var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

function descript() {
  if (texto.value.length === 0) {
    return (saida.innerHTML = "Nenhuma mensagem foi encontrada.");
  } else {
    var text = texto.value;
    var txt = text.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    saida.innerHTML = `${txt}`;
  }
}