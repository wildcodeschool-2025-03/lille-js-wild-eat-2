const burgerButton = document.getElementById("burgerbutton");
const OpenBtn = document.getElementById("openBtn");
const CloseBtn = document.getElementById("closeBtn")

openBtn.onclick = openNave;
CloseBtn.onclick = closeNave;

function openNave() {
    burgerButton.classList.add("active");
}

function closeNave() {
burgerButton.classList.remove("active");
}