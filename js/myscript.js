// domande utente
var numChilometri = parseInt( prompt('Quanti chilometri vuoi percorrere?' ) ) ;
var etaUtente = parseInt (prompt('Quanti anni hai?'));

// prezzo biglietto
var bigliettoNormale = numChilometri * 0.21;

// scontistiche biglietto
var scontoQua = bigliettoNormale * 0.4;
var scontoVen = bigliettoNormale * 0.2;
var bigliettoScontatoVen = (bigliettoNormale) - (scontoVen);
var bigliettoScontatoQua = (bigliettoNormale) - (scontoQua);
var messaggio = 'Il tuo prezzo e ' + bigliettoNormale.toFixed(2);

// gestione errore
if ( isNaN(numChilometri) || isNaN(etaUtente) ) {
    messaggio = 'Errore, ricontrolla i dati immessi'
}
// calcolo biglietto se non ci sono errori
else {
  if (etaUtente < 18 ) {
    messaggio = 'Il tuo prezzo e ' + bigliettoScontatoVen.toFixed(2);

  }
 else if (etaUtente > 65 ) {
  messaggio = 'Il tuo prezzo e ' + bigliettoScontatoQua.toFixed(2);
  }

}

// stampo il prezzo
document.getElementById('prezzo_finale').innerHTML = messaggio;
