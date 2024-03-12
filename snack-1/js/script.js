// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
//   se è dispari stampa il numero successivo

// chiedo di inserire un numero
// verifico che numero è
//  se è pari stampo
// altrimenti è dispari richiedo il numero che se sarà pari stampo

let userNumber = parseInt(prompt('Inserisci un numero'));

if (userNumber % 2 === 0) {
    console.log(userNumber + ' il tuo numero è pari')
} else {
    userNumber++
    console.log (userNumber + ' ora il tuo numero è pari')
}
