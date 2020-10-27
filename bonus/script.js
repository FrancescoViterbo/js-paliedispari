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
const palindromo = document.getElementById("palindromo");
const pariDispari = document.getElementById("pari-dispari");
const numero = document.getElementById("numero");
const palindromoBtn = document.getElementById("palindromo-btn");
const pariDispariBtn = document.getElementById("pari-dispari-btn");
const palindromoOutput = document.getElementById("palindromo-output");
const pariDispariOutput = document.getElementById("pari-dispari-output");

/* Event Listeners */
// palindromoBtn.addEventListener("click", verificaPalindromo(palindromo.value));
pariDispariBtn.addEventListener("click", giocaPariODispari(pariDispari.value, numero.value));

// function verificaPalindromo(parola) {
//     palindromoOutput.innerHTML = "";

//     let parolaReversed = "";
//     for (i = parola.length -1; i >= 0 ; i--) {
//         parolaReversed = parolaReversed + parola[i];
//     }
//     if (parolaReversed === parola) {
//         palindromoOutput.innerHTML = "la parola \"" + parola + "\" è un palindromo.";
//     } else {
//         palindromoOutput.innerHTML = "la parola \"" + parola + "\" non è un palindromo.";
//     }
// }

function giocaPariODispari(scelta, numero) {
    pariDispariOutput.innerHTML = "";

    let compNumb = Math.floor(Math.random() * 5 + 1);
    let risultatoValue = numero + compNumb;
    let risultato = "";
    if (risultatoValue % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    if (risultato === scelta) {
        pariDispariOutput.innerHTML = "Hai scelto il numero " + numero + ". Il computer ha scelto il numero " + compNumb +". Hai vinto!";
    } else {
        pariDispariOutput.innerHTML = "Hai scelto il numero " + numero + ". Il computer ha scelto il numero " + compNumb +". hai perso!";
    }
}