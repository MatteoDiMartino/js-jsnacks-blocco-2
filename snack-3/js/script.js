// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const divRed = document.createElement("div");
console.log (divRed);
divRed.classList.add("red-t");
divRed.innerText = "ecco un testo di prova";
document.body.appendChild(divRed);


const divGreen = document.createElement("div");
console.log (divGreen);
divGreen.classList.add("green-t"); 
divGreen.innerText = "ecco un testo di prova";
document.body.appendChild(divGreen);