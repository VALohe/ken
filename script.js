function nextPage(id) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function response(text, id) {
    document.getElementById(id).innerText = text;

    // Slight romantic escalation background
    if (id === "answer4" || id === "answer5" || id === "answer6") {
        document.body.style.background = "#ffd6e0";
    }
}

function yesClicked() {
    const responseText = document.getElementById("finalResponse");
    responseText.innerText = "hehe I KNOW 😌💗";

    // Dramatic glow effect
    document.body.style.background = "#ffb3c6";
}

function moveButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * 200 - 100;
    let y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
}
