var saida = document.querySelector("p#saida");

function copyToClipboard() {
    var copyText = saida.innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
       saida.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!"
    });
}