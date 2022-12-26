var botaoDescriptografa = document.getElementById("button#botao__descriptografar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function descriptografaTexto() {
  var text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'O campo está vazio.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = text.replace(/imes/g, "i");
    var txt = text.replace(/ai/g, "a");
    var txt = text.replace(/ober/g, "o");
    var txt = text.replace(/ufat/g, "u");

    saidaTexto.innerHTML = `${txt}`;
  }
}
