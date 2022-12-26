var texto = document.querySelector("textarea#main__input");
var saida = document.querySelector("p#main__output");

function copiaTexto() {
    if (texto.value.length === 0) {
        saida.innerHTML = "Ops, é preciso digitar algo para copiar!";
    } else {
        var copyText = saida.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saida.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!";
        });
    }
}