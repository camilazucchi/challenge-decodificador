var descriptBttn = document.getElementById("button#descript-bttn");
var textInput = document.querySelector("textarea#main-input");
var textOutput = document.querySelector("p#main-output");

function descriptografaTexto() {
  if (textInput.value.length === 0) {
    return (textOutput.innerHTML = "Nenhuma mensagem foi encontrada.");
  } else {
    var changeText = textInput.value;
    var txt = changeText.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    textOutput.innerHTML = `${txt}`;
  }
}
