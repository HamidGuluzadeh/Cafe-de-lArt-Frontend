const headerButtons = document.querySelectorAll(".menu .btn");

headerButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText == "HOME") {
            window.location.href = "index.html";
        } else if (buttonText == "MENU") {
            window.location.href = "menu.html";
        } else if (buttonText == "RESERVE") {
            window.location.href = "reservation.html";
        }
    });
});

const connectionArea = document.querySelector(".offline");

if (connectionArea) {
    window.addEventListener("offline", () => {
        connectionArea.classList.remove("hidden");
    });

    window.addEventListener("online", () => {
        connectionArea.classList.add("hidden");
    });
}

const loginButton = document.querySelector(".login-btn");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        alert("Authentication will be activated after the development stage!");
    });
}