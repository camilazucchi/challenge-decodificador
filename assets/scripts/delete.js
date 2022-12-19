var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

function clearText() {
    texto.value = "";
    saida.innerHTML = "Tente mais uma vez!";
}