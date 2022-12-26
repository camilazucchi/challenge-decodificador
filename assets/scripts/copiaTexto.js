var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function copiaTexto() {
    if (entradaTexto.value.length === 0) {
        saidaTexto.innerHTML = "Ops, é preciso digitar algo para copiar!";
    } else {
        var copyText = saidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaTexto.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!";
        });
    }
}