var texto = document.querySelector("textarea#main-input");
var saida = document.querySelector("p#saida");

function teste() {
    var reg = /[a-zA-Z\u00C0-\u00FF ]+/i;
    if (texto.value === reg) {
        console.log('to funcionando');
    } else {
        
    }
}