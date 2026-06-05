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