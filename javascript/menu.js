const dataLoad = document.querySelector(".data-load");
const foodsArea = document.querySelector(".food-menu .foods");

if (foodsArea) {
    fetch(`https://api.jsonbin.io/v3/b/6a11fd106610dd3ae89404ab/latest`)
    .then(response => response.json())
    .then(data => {
        if (dataLoad) dataLoad.remove();

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
}