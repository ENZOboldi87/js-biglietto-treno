// domande utente
var numChilometri = parseInt( prompt('Quanti chilometri vuoi percorrere?' ) ) ;

var etaUtente = parseInt (prompt('Quanti anni hai?'));

// prezzo biglietto
var bigliettoNormale = numChilometri * 0.21;

// scontistiche biglietto
var scontoQua = bigliettoNormale * 0.4;

var scontoVen = bigliettoNormale * 0.2;

var bigliettoScontatoVen = bigliettoNormale - scontoVen;

var bigliettoScontatoQua = bigliettoNormale - scontoQua;



if ( !isNaN(numChilometri) && !isNaN(etaUtente) ) {
    if ( etaUtente < 18 ) {
        document.getElementById('prezzo_finale').innerHTML = 'Il costo del biglietto è di € ' + bigliettoScontatoVen ;
    } else if ( etaUtente > 65 ) {
        document.getElementById('prezzo_finale').innerHTML = 'Il costo del biglietto è di € ' + bigliettoScontatoQua ;
    } else {
        document.getElementById('prezzo_finale').innerHTML = 'Il costo del biglietto è di € ' + bigliettoNormale ;
    }
} else {
    alert('immetti un numero per calcolare il tuo biglietto!')
}
