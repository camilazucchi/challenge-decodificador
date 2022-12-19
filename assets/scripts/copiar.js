function copyToClipboard() {
    var copyText = document.querySelector("p#saida").innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
       alert('texto copiado')
    });
}