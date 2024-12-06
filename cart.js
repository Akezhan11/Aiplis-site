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
    let totalWithDiscount = 0;
    let totalWithoutDiscount = 0;

    items.forEach(item => {
        const priceText = item.querySelector(".cart-item-price").textContent;
        const price = parseFloat(priceText.split(" теперь за ")[1].split("₸")[0].trim());
        const originalPriceText = item.querySelector(".cart-item-price").textContent.split(" теперь за ")[0].replace("₸", "").trim();
        const originalPrice = parseFloat(originalPriceText);
        totalWithDiscount += price;
        totalWithoutDiscount += originalPrice;
    });
    document.getElementById("cart-total-price").textContent = totalWithDiscount.toLocaleString("ru-RU") + "₸";
    document.getElementById("cart-total-original").textContent = totalWithoutDiscount.toLocaleString("ru-RU") + "₸ (цена без скидки)";
}




function addToCart(title, image, price, originalPrice) {
    const cartItems = document.querySelector(".cart-items");
    const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

    const cartItem = document.createElement("li");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <img src="${image}" alt="${title}" class="cart-item-img">
        <div class="cart-item-info">
            <p class="cart-item-title">${title}</p>
            <p class="cart-item-price">
                <span style="text-decoration: line-through; color: #d3d3d3;">${originalPrice}₸</span> 
                теперь за ${price}₸ (скидка ${discountPercentage}%)
            </p>
        </div>
        <button class="remove-item" onclick="removeItem(this)">Удалить</button>
    `;
    cartItems.appendChild(cartItem);
    updateCartTotal();
}



