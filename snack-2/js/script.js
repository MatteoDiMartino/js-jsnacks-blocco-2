// - L’utente inserisce due parole in successione, con due prompt.
//   Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo le parole
// verifico la loro lunghezza
// se first name è+ più corta stampo prima firstname e poi secondName

let firstName = prompt('Inserisci una parola');
let secondName = prompt('Inserisci una seconda parola');


if (firstName.length < secondName.length) {
    console.log (firstName + secondName);
} else if (firstName.length > secondName.length) {
    console.log (secondName + firstName);
}