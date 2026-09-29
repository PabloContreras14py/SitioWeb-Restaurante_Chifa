const menuData = [
    { 
        id: 1, 
        name: "Arroz Chaufa Especial 3H", 
        desc: "Pollo, cerdo asado, langostinos y tortilla salteados al wok con sillao oriental.",
        category: "chaufas", 
        price: 26.00,
        tag: "MÁS VENDIDO",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600"
    },
    { 
        id: 2, 
        name: "Lomo Saltado Chifa", 
        desc: "Trozos jugosos de lomo salteado a fuego alto con cebolla, tomate y cebollín.",
        category: "especiales", 
        price: 32.00,
        tag: "RECOMENDADO",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600"
    },
    { 
        id: 3, 
        name: "Kam Lu Wantan", 
        desc: "Wantanes crocantes bañados en salsa agridulce con pollo, chicharron y frutas.",
        category: "especiales", 
        price: 35.00,
        tag: "TRADICIONAL",
        image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600"
    },
    { 
        id: 4, 
        name: "Tallarín Saltado Sam Sen", 
        desc: "Fideos artesanales salteados con carnes mixtas y verduras de la estación.",
        category: "especiales", 
        price: 28.00,
        tag: "POPULAR",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600"
    },
    { 
        id: 5, 
        name: "Sopa Fuchifú Tradicional", 
        desc: "Sopa reparadora a base de pechuga de pollo deshilachada y huevo batido.",
        category: "sopas", 
        price: 18.00,
        tag: "ENTRANTE",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600"
    },
    { 
        id: 6, 
        name: "Inca Kola 1.5 Litros", 
        desc: "La combinación perfecta helada para acompañar tu banquete chifa.",
        category: "bebidas", 
        price: 11.00,
        tag: "BEBIDA",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600"
    }
];

function renderMenu(items) {
    const grid = document.getElementById("menuGrid");
    if (!grid) return;

    grid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="menu-card-img">
                <img src="${item.image}" alt="${item.name}">
                <span class="tag-badge">${item.tag}</span>
            </div>
            <div class="menu-card-body">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="menu-card-footer">
                    <span class="price">S/ ${item.price.toFixed(2)}</span>
                    <button class="btn-primary" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}