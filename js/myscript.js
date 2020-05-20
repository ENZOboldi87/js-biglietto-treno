// domande utente
var numChilometri = parseInt( prompt('Quanti chilometri vuoi percorrere?' ) ) ;

var etaUtente = parseInt (prompt('Quanti anni hai?'));

// prezzo biglietto
var bigliettoNormale = numChilometri * 0.21;

// scontistiche biglietto
var scontoQua = ((numChilometri * 0.21 / 100) * 40);

var scontoVen = ((numChilometri * 0.21 / 100) * 20);

var bigliettoScontatoVen = bigliettoNormale - scontoVen;

var bigliettoScontatoQua = bigliettoNormale - scontoQua;



  if (etaUtente > 65) {
  document.getElementById('prezzo_finale').innerHTML = ('il prezzo da pagare e ' + bigliettoScontatoQua + ' €' )
  alert('hai ottenuto sconto del 40%');
    }

  if (etaUtente < 18) {
  document.getElementById('prezzo_finale').innerHTML = ('il prezzo da pagare e ' + bigliettoScontatoVen + ' €' )
    alert('hai ottenuto sconto del 20%');
    }

  else {
    document.getElementById('prezzo_finale').innerHTML = ('il prezzo da pagare e ' + bigliettoNormale + ' €' )
    }

  if (isNaN (numChilometri) || isNaN (etaUtente)) {
  alert('devi inserire un numero');

  document.getElementById('prezzo_finale').innerHTML = ('Inserisci Numeri per calcolare il tuo biglietto' )
    }
