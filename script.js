/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
//creo un prompt per chiedere una parola

const parola = prompt("Inserisci una parola:");

//creo una funzione per invertire la parola data

function reverse(parola) {
    let parolaInvertita = '';
  
    for (let i = parola.length - 1; i >= 0; i--) {
      parolaInvertita += parola[i];
    }
  
    return parolaInvertita;
}

//creo una funzione per capire se la parola data è palindroma o no

function palindroma(parola) {
    const parolaInvertita = reverse(parola);
    return parola === parolaInvertita;
}

//creo un "if" per stampare la parola in console

if (palindroma(parola)) {
    console.log(parola + " è una parola palindroma.");
} else {
    console.log(parola + " non è una parola palindroma.");
}
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// creo i vari prompt per far scegliere all'utente le varie opzioni

const userChoice = prompt('Scegli pari o dispari');
console.log('Hai scelto ' + userChoice);

const userNumber = parseInt(prompt('Scegli un numero fra 1 e 5'));
console.log('Il numero da te scelto fra 1 e 5 è ' + userNumber);

const casualNumber = (Math.floor(Math.random() * 5) + 1);
console.log('Il numero generato casualmente dall AI è ' + casualNumber);


//faccio apparire in cosnole un messaggio se l'utente non ha inserito i dati giusti nel prompt

if (userChoice!== "pari" && userChoice !== "dispari") {
    console.log("Scelta non valida. Devi scegliere tra pari e dispari.");
} 
if (userNumber < 1 || userNumber > 5) {
    console.log("Numero non valido. Devi inserire un numero da 1 a 5.");
} 

//scrivo in console se il numero scelto dall'utente è pari o dispari

if (userNumber % 2 === 0) {
    console.log (userNumber + ' è pari')
} else {
    console.log (userNumber + ' è dispari')
}

//creo la funzione che darà come risultato il vincitore del gioco

    //creo la funzione
    function vincitore (userChoice, userNumber, casualNumber){
        
        //faccio la somma fra il numero dell'utento e il numero generato randomicamente
        const sum = userNumber + casualNumber;
        console.log('La somma dei due numeri è ' + sum);


        //creo un "if" 
        //dico se ha scelto pari e la somma è pari --> allora HA VINTO
        if ((sum % 2 === 0 && userChoice === 'pari')||(sum % 2 !=0 && userChoice === 'dispari')) {
            return 'Hai vinto!';
        } 
        //altrimenti --> HA PERSO
        else {
            return 'Hai perso';
        }
    }

//stampo il risultato in console

const risultato = vincitore(userChoice, userNumber, casualNumber);
console.log(risultato);