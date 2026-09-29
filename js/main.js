document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuData);

    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-category");
            if (category === "todos") {
                renderMenu(menuData);
            } else {
                renderMenu(menuData.filter(item => item.category === category));
            }
        });
    });

    const cartBtn = document.getElementById("cartBtn");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");

    if (cartBtn && cartModal && closeCart) {
        cartBtn.addEventListener("click", () => cartModal.style.display = "block");
        closeCart.addEventListener("click", () => cartModal.style.display = "none");
    }
});