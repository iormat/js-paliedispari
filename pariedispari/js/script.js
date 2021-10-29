/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
1. ask user to choose between even and odd
    (chiedi all'utente di scegliere se pari o dispari)
    1.2 ask for a number from 1 to 5
        (chidi all'utente un numero da 1 a 5)
2. generate a random number from 1 to 5
    (genera un numero randomico da 1 a 5)
3. sum generated number with user number
    (somma il numero generato con quello scelto dall'utente)
4. check if odd or even
    (controlla se è pari o dispari)
5.declare winner
    (dichiara il vincitore)
*/
 
//1. 
const userChoice = (prompt("scegli se pari o dispari:"));
const userChoiceSmall = userChoice.toLowerCase();
console.log("Hai scelto: " + userChoiceSmall);
// 1.2
const userNumChoice = parseInt(prompt("Scegli un numero da 1 a 5:"));
console.log("la tua scelta è: " + userNumChoice);
// 2.
function randomNumberGener(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const randNum = randomNumberGener(1, 5);
console.log("Il computer ha scelto: " + randNum);
// 3.
const sumOfNum = parseInt(randNum + userNumChoice);
// 4.
const result = (sumOfNum % 2  == 0) ? "pari" : "dispari";
// 5.
if(result === userChoiceSmall) {
    console.log("complimenti hai vinto");
}else {
    console.log("mi spiace, ma hai perso");
}
console.log("il risultato è: " + sumOfNum);
