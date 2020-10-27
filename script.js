/* Palidroma
Pari e Dispari
*/

/* Selectors */
const palindromoOutput = document.getElementById("palindromo-output");
const pariDispariOutput = document.getElementById("pari-dispari-output");


// Chiedere all’utente di inserire una parola
var parola = prompt("Inserisci una parola");
parola = parola.toString();

palindromoOutput.innerHTML = verificaPalindromo(parola);

// Creare una funzione per capire se la parola inserita è palindroma
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

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt("Scrivi pari o dispari").toString();
var numero = parseInt(prompt("Scegli un numero da 1 a 5"));

pariDispariOutput.innerHTML = giocaPariDispari(scelta, numero);

function giocaPariDispari(choice, numb) {
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    let compNumb = Math.floor(Math.random() * 5 + 1);
    // Sommiamo i due numeri
    let somma = numb + compNumb;
    let pariOdispari = "";
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    if (somma % 2 === 0) {
        pariOdispari = "pari";
    } else {
        pariOdispari = "dispari";
    }
    // Dichiariamo chi ha vinto. 
    if (choice === pariOdispari) {
        return "Il computer ha scelto il numero " + compNumb +". Hai vinto!";
    } else {
        return "Il computer ha scelto il numero " + compNumb +". hai perso!";
    }
}