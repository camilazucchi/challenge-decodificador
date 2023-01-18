var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function limpaCampos() {
  if (entradaTexto.value.length === 0) {
    saidaTexto.innerHTML = "Digite alguma coisa antes de apagar!";
  } else {
    entradaTexto.value = "";
    saidaTexto.innerHTML = "Apagamos! Gostaria de tentar novamente?";
  }
}