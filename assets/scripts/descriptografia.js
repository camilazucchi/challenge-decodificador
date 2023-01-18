var botaoDescriptografa = document.getElementById("button#botao__descriptografar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function descriptografaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Números não são permitidos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'O campo está vazio.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    saidaTexto.innerHTML = `${txt}`;
  }
}