/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userChoice = prompt('Scegli pari o dispari');
console.log(userChoice);

const userNumber = parseInt(prompt('Scegli un numero fra 1 e 5'));
console.log(userNumber);

const casualNumber = (Math.floor(Math.random() * 5) + 1);
console.log(casualNumber);

if (userNumber % 2 === 0) {
    console.log ('Il numero che hai scelto è pari')
} else {
    console.log ('Il numero che hai scelto è dispari')
}

function vincitore (userChoice, userNumber, casualNumber){
    const sum = userNumber + casualNumber;

    if ((sum % 2 === 0 && userChoice === 'pari')||(sum % 2 !=0 && userChoice === 'dispari')) {
        return 'Hai vinto!';
    } else {
        return 'Hai perso';
    }
}

const risultato = vincitore(userChoice, userNumber, casualNumber);
console.log(risultato);