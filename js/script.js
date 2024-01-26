const kmToTravel = Number(prompt("Indica i km che vuoi percorrere"));

const age = Number(prompt("Indica la tua età"));

let kmPrice = 0.21 * 10;

let discountedPrice = kmPrice;



if (age < 18) {
    let discount = 0.2;

    document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 20%";
    discountedPrice = kmPrice * (1 - discount);

} else if (age > 64) {
    let discount = 0.4;

    document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 40%";
    discountedPrice = kmPrice * (1 - discount);
}

let totalCost = kmToTravel * discountedPrice;
let lastPrice = totalCost.toFixed(2);

document.getElementById('trainTicket').innerHTML = lastPrice + ' €';