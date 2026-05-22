const hotDrinkCards = document.querySelector(".hot-drinks .cards");
const dessertCards = document.querySelector(".desserts .cards");

fetch(`https://api.jsonbin.io/v3/b/6a0ffb0c6877513b27b2ab20/latest`, {
    headers: {
        "X-Master-Key": '$2a$10$RTZJeLd9/zm0EQ.sAzlgpelkcGl6JnwF3J9zpxxVP1rfRrYnhkzYm'
    }
})
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