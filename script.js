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
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    alert(`Produto ${productId} adicionado ao carrinho!`);
}

function searchProduct() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        
        productList.appendChild(productItem);
    });
}

window.onload = loadProducts;
