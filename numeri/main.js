//var numero = parseInt(prompt("Inserisci un numero tra 1 e 5"));
//console.log("numero scelto " + numero);
//if (numero>5) {
  //var numero = prompt("Inserisci un numero tra 1 e 5");
//}
var numero
do {
    numero = parseInt(prompt('Inserisci un numero'));
    console.log(numero);
} while (isNaN(numero) || numero <= 0 || numero > 5);



do {
    parita = prompt('Cosa scegli tra "pari" e "dispari"?');
    console.log(parita);
} while (parita != 'pari' && parita != 'dispari');

var numero_casuale = Math.floor(Math.random()* 5);
console.log("numero scelto dal computer " + numero_casuale);
//function sommaNumeri(num1, num2) {
//  var risultato = numero + numero_casuale;
 //return risultato;
//}
//var somma = sommaNumeri(numero, numero_casuale)
var somma = numero + numero_casuale;
console.log("somma : ");
console.log(somma);
//if ( parita== "pari") {
  //somma%2 == 0
  //console.log("Hai vinto!");
//}else if {
  //console.log("Hai Perso!");
//}else if (parita == "dispari") {
  //somma % 2 == 0
  //console.log("Hai Perso!");
//}else {
  //console.log("Hai vinto!");
//}
var risultato = '';
if(isEven(somma)) {
    esito = 'pari';
} else {
    esito = 'dispari';
}



if(isVincitore(parita, risultato)) {
    console.log('Hai Vinto!');
} else {
    console.log('Hai Perso!');
}


function isEven(somma) {
    if(somma % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
function isVincitore(scelta1, scelta2) {
    if(scelta1 == scelta2) {
        return true;
    } else {
        return false;
    }
}
