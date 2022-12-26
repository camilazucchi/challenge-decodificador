var descriptBttn = document.getElementById("button#descript__bttn");
var texto = document.querySelector("textarea#main__input");
var textOutput = document.querySelector("p#main__output");

function descriptografaTexto() {
  var text = texto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    textOutput.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (texto.value === '') {
    textOutput.innerHTML = 'O campo está vazio.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = text.replace(/imes/g, "i");
    var txt = text.replace(/ai/g, "a");
    var txt = text.replace(/ober/g, "o");
    var txt = text.replace(/ufat/g, "u");

    textOutput.innerHTML = `${txt}`;
  }
}
