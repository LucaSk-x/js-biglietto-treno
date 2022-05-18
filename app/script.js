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

const billToKm = 0.21
const discount20 = 0.8;
const discount40 = 0.6;

/*ottengo dati utenti */

const userAgeText = prompt ("Inserire età del viaggiatore")
const userAge = parseInt (userAgeText)
const kmToBill = prompt ("Inserire i Km della tratta desiderata");

/* calcolo il prezzo */

let totalPrice = kmToBill * billToKm

if (userAge < 18) {
    totalPrice = totalPrice * discount20
} else if (userAge > 65) {
    totalPrice = totalPrice * discount40
}

const spanPrice = document.getElementById("prezzo")

spanPrice.innerHTML= totalPrice


const spanAge = document.getElementById("agenumber")

spanAge.innerHTML= userAge


console.log(totalPrice)

