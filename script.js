/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* Selectors */
const palindromoOutput = document.getElementById("palindromo-output");
const pariDispariOutput = document.getElementById("pari-dispari-output");

var parola = prompt("Inserisci una parola");
parola = parola.toString();

palindromoOutput.innerHTML = verificaPalindromo(parola);

function verificaPalindromo(word) {
    var parolaReversed = "";

    for (i = word.length - 1; i >= 0 ; i--) {
        parolaReversed = parolaReversed + word[i];
    }
    if (parolaReversed === word) {
        return "la parola \"" + word + "\" è un palindromo.";
    } else {
        return "la parola \"" + word + "\" non è un palindromo.";
    }
}

var scelta = prompt("Scrivi pari o dispari").toString();
var numero = parseInt(prompt("Scegli un numero da 1 a 5"));

pariDispariOutput.innerHTML = giocaPariDispari(scelta, numero);

function giocaPariDispari(choice, numb) {
    let compNumb = Math.floor(Math.random() * 5 + 1);
    let somma = numb + compNumb;
    let pariOdispari = "";
    if (somma % 2 === 0) {
        pariOdispari = "pari";
    } else {
        pariOdispari = "dispari";
    }
    if (choice === pariOdispari) {
        return "Il computer ha scelto il numero " + compNumb +". Hai vinto!";
    } else {
        return "Il computer ha scelto il numero " + compNumb +". hai perso!";
    }
}