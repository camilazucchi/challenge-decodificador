var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function copiaTexto() {
    let text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
        saidaTexto.innerHTML = 'Não é possível copiar palavras com letras maiúsculas ou acentuação.'
    } else if (entradaTexto.value.length === 0) {
        saidaTexto.innerHTML = "Ops, é preciso digitar algo para copiar!";
    } else {
        const copyText = saidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaTexto.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!";
        });
    }
}