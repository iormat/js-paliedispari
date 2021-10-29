/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/

/*
1. ask user to input a word 
    (chiedi all'utente di inserire una parola)
2. create a function to check if string letters are equal lef to right and right to left 
    (creare una funzione per controllare se le lettere della stringa sono uguali da destra a sinistra e viceversa)
    2.1 take the string length
        (prendere la lunghezza dell stringa)
        2.2 divide it by two (palindrome should be 2 equal hals(*) and there is no point in working all letters 1by1)
            [dividere la lunghezza per 2 (una parola palindroma divisa in 2 è uguale se una delle due è invertita e non c'è ragione di controllarla per tutta la lunghezza)]
            2.3 chek if the two halfs are equal (*when one is reversed)
                (controllare se le due metè sono uguali, sempre invertendone una)
3. give user an answer
    (dare all'utente la risposta)
*/

// 1.
 const uWord = prompt("Scegli una parola da controllare:");
 // 1.1 change user input all in lowercase to avoid negative results if uppercase is present but the letters are the same
        //(cambiare l'input dell'utente tutto in minuscolo per evitare che risulti sbagliato anche se le lettere sono le stesse)
 const uWordSmall = uWord.toLowerCase(); 
// 2.
function isItPalindrome(){
    // 2.1
    const wordLength = uWordSmall.length;
    // 2.2
    for (let i = 0; i < wordLength / 2; i++) {
        // 2.3
        if (uWordSmall[i] !== uWordSmall[wordLength - 1 - i]) {
            return 'Non è un palindromo';
        }
    }
    return "E' un palindromo"
}
// 3.
let results = isItPalindrome();
console.log(results);