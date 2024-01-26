const kmToTravel = Number(prompt("Indica i km che vuoi percorrere"));

const age = Number(prompt("Indica la tua età"));

let kmPrice = 0.21 * 10;



if (age < 18) {
    let discount = 0.2;
    document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 20%";
    document.getElementById('trainTicket').innerHTML = kmPrice * discount + '€';
}