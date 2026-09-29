let cart = [];

function addToCart(id) {
    const item = menuData.find(product => product.id === id);
    if (item) {
        cart.push(item);
        updateCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const countElement = document.getElementById("cartCount");
    const itemsContainer = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (countElement) countElement.innerText = cart.length;

    if (itemsContainer) {
        if (cart.length === 0) {
            itemsContainer.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 3rem;">El carrito está vacío.<br>¡Agrega unos deliciosos chaufas!</p>`;
        } else {
            itemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong>
                        <br>
                        <small style="color: var(--accent-gold); font-weight:700;">S/ ${item.price.toFixed(2)}</small>
                    </div>
                    <i class="fas fa-trash" style="color: var(--primary-red); cursor: pointer;" onclick="removeFromCart(${index})"></i>
                </div>
            `).join('');
        }
    }

    if (totalElement) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalElement.innerText = total.toFixed(2);
    }
}

document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Agrega platillos a tu carrito antes de pedir.");
        return;
    }
    let mensaje = "¡Hola Chifa Los 3 Hermanos! Quisiera realizar el siguiente pedido para Cañete:\n\n";
    cart.forEach(item => {
        mensaje += `• ${item.name} - S/ ${item.price.toFixed(2)}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    mensaje += `\n*Total a pagar: S/ ${total.toFixed(2)}*`;

    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(mensaje)}`, "_blank");
});