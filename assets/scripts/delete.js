var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

function clearText() {
  if (texto.value.length === 0) {
    saida.innerHTML = "Digite alguma coisa antes de apagar!";
  } else {
    texto.value = "";
    saida.innerHTML = "Apagamos! Gostaria de tentar novamente?";
  }
}
