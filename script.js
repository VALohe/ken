function nextPage(id) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function response(text, id) {
    document.getElementById(id).innerText = text;
}

function yesClicked() {
    const responseText = document.getElementById("finalResponse");
    responseText.innerText = "hehe I KNOW 😌💗";
}

function moveButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * 200 - 100;
    let y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
}
