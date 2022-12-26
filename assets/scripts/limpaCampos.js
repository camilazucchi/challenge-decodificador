var texto = document.querySelector("textarea#main__input");
var saida = document.querySelector("p#main__output");

function limpaCampos() {
  if (texto.value.length === 0) {
    saida.innerHTML = "Digite alguma coisa antes de apagar!";
  } else {
    texto.value = "";
    saida.innerHTML = "Apagamos! Gostaria de tentar novamente?";
  }
}