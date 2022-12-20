var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

function copyToClipboard() {
    if (texto.value.length === 0) {
        saida.innerHTML = "Ops, é preciso digitar algo para copiar!"
    } else {
    var copyText = saida.innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
       saida.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!"
    });
}
}