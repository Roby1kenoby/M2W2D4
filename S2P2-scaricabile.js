// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/* PERSONAL NOTES:
    - isAmbassador === true, apply 30% discount BEFORE applying shipping costs
    - isAmbassador === false, no discount
    - if shoppingCart > 100, apply free shipping, otherwise add shpping costs

    warning: i'm not testing for input types because i assume that i will be the only one to input arguments into these functions,
    and i know what they expect to get as input.
    In a real project, it would be proper to test for input types before entering the calculations inside the functions.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

// i could be defining the array here like this: let users = [marco, paul, amy], but the specifics of the homework 
// said to use push, so i'll do that
let users = []

users.push(marco, paul, amy)

// this function has an object user as parameter. If the isAmbassador property is true, than it prints "it's an ambassodr",
// otherwise "it's not an ambassador"
function userIsAmbassador(user){
  return user.isAmbassador ? 
    console.log(`${user.name} ${user.lastName} is an ambassador`) : 
    console.log(`${user.name} ${user.lastName} is not an ambassador`)
}

// printing for every user if it's an ambassador or not
console.log('Printing users array:\n')
for(let user of users){
  userIsAmbassador(user)
}

// array for storing only ambassador users
let ambassadorUsers =[]

// inserting into ambassadorUsers only the users that are ambassador
for(let user of users){
  user.isAmbassador ? 
    ambassadorUsers.push(user) : 
    null
}

// function to sum up an array of prices
function addPrices(prices){
  let total = 0
  for (let p of prices){
    total += p
  }
  return total
}

// function to calculate final checkout total, applying discount if the user is an ambassador
function checkout(user, prices){
  // adding prices
  let actualTotal = addPrices(prices)
  // applying discount if ambassador
  actualTotal = user.isAmbassador ? 
  actualTotal *= 0.7: 
  actualTotal
  // if actuatlTotal > 100, return actualTotal, otherwise, reuse addPrices function to add to the total the shippingCost
  return actualTotal > 100 ?
    actualTotal:
    addPrices([actualTotal,shippingCost])
}



// test cases
let totalPrice = 0
// base case
console.log(`\nTesting base case Amy, [34, 5, 2]`)
totalPrice = checkout(utenteCheEffettuaLAcquisto, prices).toFixed(2)
console.log(`Your total is ${totalPrice}€`)

// price over 100 and isAmbassador == true
console.log(`\nTesting price over 100 and isAmbassador = true. User Marco, [150, 200, 10]`)
prices2 = [150, 200, 10]
utenteCheEffettuaLAcquisto2 = marco
totalPrice = checkout(utenteCheEffettuaLAcquisto2, prices2).toFixed(2)
console.log(`Your total is ${totalPrice}€`)

// price under 100 and isAmbassador == true
console.log(`\nTesting price under 100 and isAmbassador = true. User Marco, [10, 20, 5]`)
prices3 = [10, 20, 5]
utenteCheEffettuaLAcquisto3 = marco
totalPrice = checkout(utenteCheEffettuaLAcquisto3, prices3).toFixed(2)
console.log(`Your total is ${totalPrice}€`)

// price over 100 and isAmbassador == false
console.log(`\nTesting price under 100 and isAmbassador = false. User paul, [100, 20, 5]`)
prices4 = [100, 20, 5]
utenteCheEffettuaLAcquisto4 = paul
totalPrice = checkout(utenteCheEffettuaLAcquisto4, prices4).toFixed(2)
console.log(`Your total is ${totalPrice}€`)
