randomNum1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images\\dice" + randomNum1 + ".png");

randomNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images\\dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Won!";
}

if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Won!";
}

if (randomNum1 == randomNum2) {
    document.querySelector("h1").textContent = "It's a Draw";
}

function rollDice() {
    randomNum1 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "images\\dice" + randomNum1 + ".png");

    randomNum2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[1].setAttribute("src", "images\\dice" + randomNum2 + ".png");

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").textContent = "Player 1 Won!";
    }

    if (randomNum1 < randomNum2) {
        document.querySelector("h1").textContent = "Player 2 Won!";
    }

    if (randomNum1 == randomNum2) {
        document.querySelector("h1").textContent = "It's a Draw";
    }
}