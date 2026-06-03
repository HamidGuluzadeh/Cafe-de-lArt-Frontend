const headerButtons = document.querySelectorAll(".menu .btn");
const dataLoad = document.querySelector(".data-load");
const foodsArea = document.querySelector(".food-menu .foods");
const connectionArea = document.querySelector(".offline");

fetch(`https://api.jsonbin.io/v3/b/6a11fd106610dd3ae89404ab/latest`)
.then(response => response.json())
.then(data => {
    dataLoad.remove();

    foodsArea.innerHTML +=
    `<div class="hot-drinks">
        <h3 class="category-title">Hot Drinks</h3>
        <div class="cards">
                        
        </div>
    </div>
    <div class="desserts">
        <h3 class="category-title">Desserts</h3>
        <div class="cards">

        </div>
    </div>`;

    const hotDrinkCards = document.querySelector(".hot-drinks .cards");
    const dessertCards = document.querySelector(".desserts .cards");

    const hotDrinksData = data.record.hotDrinks;
    const dessertsData = data.record.desserts;

    hotDrinksData.forEach((item) => {
        const premiumBadge = item.premium ? 
        `<img src="./icons/premium-icon.png" alt="Premium Badge" class="premium-icon">` : '';

        hotDrinkCards.innerHTML += 
        `<div class="card">
            <div class="item-img">
                ${premiumBadge}
                <img src="./images/${item.image}" alt="${item.name}" class="main-img">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        </div>`;
    });

    dessertsData.forEach((item) => {
        const premiumBadge = item.premium ? 
        `<img src="./icons/premium-icon.png" alt="Premium Badge" class="premium-icon">` : '';

        dessertCards.innerHTML += 
        `<div class="card">
            <div class="item-img">
                ${premiumBadge}
                <img src="./images/${item.image}" alt="${item.name}" class="main-img">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        </div>`;
    });
})
.catch((error) => {
    console.error("Error: ", error);
});

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

window.addEventListener("offline", () => {
    connectionArea.classList.remove("hidden");
});

window.addEventListener("online", () => {
    connectionArea.classList.add("hidden");
});


const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name-error");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-error");
const reserveDate = document.querySelector("#reserve-date");
const reserveDateError = document.querySelector("#date-error");
const reserveTime = document.querySelector("#reserve-time");
const reserveTimeError = document.querySelector("#time-error");
const table = document.querySelector("#table");
const tableError = document.querySelector("#table-error");
const guest = document.querySelector("#guest");
const guestError = document.querySelector("#guest-error");
const confirmButton = document.querySelector("#confirm-btn");
const successMessage = document.querySelector(".success-msg");
const errorMessages = document.querySelectorAll(".error-msg");

if (confirmButton) {
    confirmButton.addEventListener("click", (event) => {
        event.preventDefault();

        successMessage.innerText = "";

        errorMessages.forEach((message) => {
            message.innerText = "";
        });

        const regex1 = /[^a-zA-ZÇçƏəĞğIıİiÖöŞşÜü\s]/;
        const regex2 = /^\s*$/;
        const phoneRegex = /^(\+994|0)[\s\-]*([1-9]\d)[\s\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/;
        let isValid = true;

        if (regex2.test(firstName.value)) {
            firstNameError.innerText = "First name field cannot be empty!";
            isValid = false;
        } else if (regex1.test(firstName.value)) {
            firstNameError.innerText = "First name must contain only letters!";
            isValid = false;
        }

        if (regex2.test(lastName.value)) {
            lastNameError.innerText = "Last name field cannot be empty!";
            isValid = false;
        } else if (regex1.test(lastName.value)) {
            lastNameError.innerText = "Last name must contain only letters!";
            isValid = false;
        }

        if (regex2.test(phone.value)) {
            phoneError.innerText = "Phone number field cannot be empty!";
            isValid = false;
        } else if (!phoneRegex.test(phone.value)) {
            phoneError.innerText = "Incorrect phone number format!";
            isValid = false;
        }

        if (regex2.test(reserveDate.value)) {
            reserveDateError.innerText = "Reservation date is not selected!";
            isValid = false;
        }

        if (regex2.test(reserveTime.value)) {
            reserveTimeError.innerText = "Reservation time is not selected!";
            isValid = false;
        }
        
        if (table.value == "select") {
            tableError.innerText = "Table number is not selected!";
            isValid = false;
        }

        if (guest.value == "select") {
            guestError.innerText = "Guest count is not selected!";
            isValid = false;
        }

        if (isValid) {
            successMessage.innerText = "Successfully reserved!";
        }
    });
}

const loginButton = document.querySelector(".login-btn");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        alert("Authentication will be activated after the development!");
    });
}