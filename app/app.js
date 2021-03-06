/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzo: 24,50 */

/* prima determinare Età lunghezza del viaggio (per applicare lo sconto)
reperire i dati (prompt) 
eseguire operazioni matematiche:
chilometri per 0.21 
calcolare sconto con if eta<18 oppure eta > 65
sottrarre sconto al prezzo del biglieto pieno
stampare tutti io dati HTML */

const kmPrice = 0.21;
const discount20 = 0.8;
const discount40 = 0.6;

const notValidKmMessage = "Il valore inserito non è valida, inserire un numero" 
const notValidAgeMessage = "L'età inserita non è valida, inserire un numero" 
const dataInsertNotValid = "Valore non dichiarato"

userAge = prompt ("Inserire età del viaggiatore")

if ((userAge < 0) || isNaN(userAge) || (userAge === "")) {
    alert(notValidAgeMessage)
}

kmToBill = prompt ("Inserire i Km della tratta desiderata")

if ((kmToBill < 0) || isNaN(kmToBill) || (kmToBill === " ")) {
    alert(notValidKmMessage)
    kmToBill = dataNotInsert
}

let totalPrice = kmPrice * kmToBill

if (userAge < 18) {
    finalPrice = totalPrice * discount20
} else if (userAge > 65) {
    finalPrice = totalPrice * discount40
} else {
    finalPrice = totalPrice
}

