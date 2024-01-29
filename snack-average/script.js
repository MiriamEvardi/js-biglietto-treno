let first = Number(prompt("Inserisci il terzo numero:"));
let second = Number(prompt("Inserisci il primo numero:"));
let third = Number(prompt("Inserisci il secondo numero:"));

if (isNaN(first) || isNaN(second) || isNaN(third)) {
    alert("Inserisci solo numeri validi.");
} else {
    let average = (first + second + third) / 3;
    alert("La media dei numeri inseriti è: " + average.toFixed(2));
}