const hotDrinkCards = document.querySelector(".hot-drinks .cards");
const dessertCards = document.querySelector(".desserts .cards");
const headerButtons = document.querySelectorAll(".menu .btn");

fetch(`https://api.jsonbin.io/v3/b/6a11fd106610dd3ae89404ab/latest`)
.then(response => response.json())
.then(data => {
    hotDrinkCards.innerHTML = '';
    dessertCards.innerHTML = '';

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