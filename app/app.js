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

const nomeUtente = prompt("Qual è il tuo nome?");
const etàUtente = prompt("Qual è la tua età?");
const lunghezzaViaggio = prompt("Per quanti Chilometri desideri viaggiare?");
const numChilometri = parseInt("lunghezzaViaggio");

const prezzoPienoBiglietto = (numChilometri * .21);

console.log(prezzoPienoBiglietto)
console.log(lunghezzaViaggio)
console.log(numChilometri)