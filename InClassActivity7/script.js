let button = document.getElementById("gameButton");
let levelDisplay = document.getElementById("level");
let scoreDisplay = document.getElementById("score");

let level = 1;
let clicks = 0;
let timeout = 500;

function getRandomPosition() {
    let top = Math.random() * 300 + "px";
    let left = Math.random() * 300 + "px";
    return { top, left };
}

function moveButton() {
    let pos = getRandomPosition();
    button.style.marginTop = pos.top;
    button.style.marginLeft = pos.left;
}

button.addEventListener("mouseover", () => {
    setTimeout(() => {
        moveButton();
    }, timeout);
});

button.addEventListener("click", () => {
    clicks++;
    scoreDisplay.textContent = "Score: " + clicks + "/3";
    if (clicks === 3) {
        level++;
        clicks = 0;
        timeout -= 100;
        if (timeout < 0) timeout = 0;
        if (level > 6) {
            alert("Congrats! You beat all levels!");
            level = 1;
            timeout = 500;
        }
        clicks = 0;
        scoreDisplay.textContent = "Score: " + clicks + "/3";
        levelDisplay.textContent = "Level: " + level;
        alert("Next Level! Level: " + level + "\nTimeout: " + timeout + "ms");
    }
});