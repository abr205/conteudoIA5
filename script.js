const products = [
    {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 'R$ 100,00',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do Produto 2',
        price: 'R$ 200,00',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Produto 3',
        description: 'Descrição do Produto 3',
        price: 'R$ 300,00',
        image: 'https://via.placeholder.com/150'
    },
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="viewProduct(${product.id})">Ver Detalhes</button>
            `;
            productList.appendChild(productItem);
        });
    }
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        localStorage.setItem('product', JSON.stringify(product));
        window.location.href = 'product.html';
    }
}

function loadProductDetail() {
    const product = JSON.parse(localStorage.getItem('product'));
    if (product) {
        const productDetail = document.getElementById('product-detail');
        productDetail.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
    }
}

function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Produto adicionado ao carrinho!');
}

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
}

function finalizePurchase() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cartItems');
    window.location.href = 'index.html';
}

function searchProduct() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="viewProduct(${product.id})">Ver Detalhes</button>
            `;
            productList.appendChild(productItem);
        });
    }
}

window.onload = function() {
    if (document.getElementById('product-list')) {
        loadProducts();
    }
    if (document.getElementById('product-detail')) {
        loadProductDetail();
    }
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
};
