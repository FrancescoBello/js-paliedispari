var numero = prompt("Inserisci un numero tra 1 e 5");
console.log("numero scelto " + numero);
if (numero>5) {
  var numero = prompt("Inserisci un numero tra 1 e 5");
}




var parita = prompt("Scegli se la somma dei numeri sarà Pari o Dispari");
if (parita == "pari") {
  console.log("Hai scelto Pari");
}else if  (parita == "dispari"){
  console.log("Hai scelto dispari");
}else {
  var parita = prompt("Scegli se la somma dei numeri sarà Pari o Dispari");
}
var numero_casuale = Math.floor(Math.random()* 5);
console.log("numero scelto dal computer " + numero_casuale);
function sommaNumeri(num1, num2) {
  var risultato = num1 + num2;
 return risultato;
}
var somma = sommaNumeri(numero, numero_casuale)
console.log(somma);

if (somma%2 == 0 && (parita== "pari")) {
  console.log("Hai vinto!");
}else {
  console.log("Hai perso!");
}
