function toggleCart() {
    const cart = document.getElementById("cart-container");
    cart.classList.toggle("hidden");
}

function removeItem(button) {
    const item = button.closest(".cart-item");
    item.remove();
    updateCartTotal();
}
function updateCartTotal() {
    const items = document.querySelectorAll(".cart-item");
    let total = 0;

    items.forEach(item => {
        // Извлекаем цену из строки, используя только числа
        const priceText = item.querySelector(".cart-item-price").textContent;
        const price = parseFloat(priceText.replace("₸", "").replace(",", "").trim());

        if (!isNaN(price)) {
            total += price;
        }
    });

    // Форматируем итоговую сумму, добавляем символ валюты
    document.getElementById("cart-total-price").textContent = total.toLocaleString('ru-RU') + "₸";
}



function addToCart(title, image, price) {
    const cartItems = document.querySelector(".cart-items");

    // Создаем элемент товара
    const cartItem = document.createElement("li");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <img src="${image}" alt="${title}" class="cart-item-img">
        <div class="cart-item-info">
            <p class="cart-item-title">${title}</p>
            <p class="cart-item-price">${price}₸</p> <!-- Цена теперь передается как число -->
        </div>
        <button class="remove-item" onclick="removeItem(this)">Удалить</button>
    `;

    // Добавляем товар в корзину
    cartItems.appendChild(cartItem);

    // Обновляем итоговую сумму
    updateCartTotal();
}
