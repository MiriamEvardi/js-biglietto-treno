function paperScissorRockGame(user) {
    const choice = ["paper", "scissor", "rock"];
    const computer = choice[Math.floor(Math.random() * choice.length)];

    document.getElementById("computer_choice").innerHTML = `The computer has chosen: ${computer}<br>`;

    console.log(`The computer has chosen: ${computer}`);

    if (user === computer) {
        return "Draw!";
    } else if (
        (user === "paper" && computer === "scissor") ||
        (user === "scissor" && computer === "rock") ||
        (user === "rock" && computer === "paper")
    ) {
        document.getElementById("computer_choice").innerHTML = `The computer has chosen: ${computer}<br>`;

        return "The computer wins!";
    } else {
        document.getElementById("computer_choice").innerHTML = `The computer has chosen: ${computer}<br>`;
        return "You won!";
    }
}

function play() {
    const user = prompt("Chose: paper, scissor, rock: ");
    const results = paperScissorRockGame(user);

    document.getElementById("results").innerHTML += results + "<br>";
}