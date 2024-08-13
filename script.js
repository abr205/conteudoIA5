const products = [
    {
        id: 1,
        name: 'Smartphone X',
        description: 'Um smartphone com tela de 6.5 polegadas, 128GB de armazenamento, e câmera tripla.',
        price: 'R$ 2.499,00',
        image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Smartphone+X'
    },
    {
        id: 2,
        name: 'Tênis Esportivo',
        description: 'Tênis confortável para corrida com sola emborrachada e material respirável.',
        price: 'R$ 199,00',
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=T%C3%AAnis+Esportivo'
    },
    {
        id: 3,
        name: 'Fone de Ouvido Bluetooth',
        description: 'Fone de ouvido sem fio com cancelamento de ruído e duração de bateria de até 20 horas.',
        price: 'R$ 349,00',
        image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Fone+Bluetooth'
    },
    {
        id: 4,
        name: 'Notebook Gamer',
        description: 'Notebook com processador i7, 16GB de RAM, SSD de 512GB e placa de vídeo dedicada.',
        price: 'R$ 7.999,00',
        image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Notebook+Gamer'
    },
    {
        id: 5,
        name: 'Camisa Polo',
        description: 'Camisa polo 100% algodão, disponível em diversas cores e tamanhos.',
        price: 'R$ 89,90',
        image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Camisa+Polo'
    },
    {
        id: 6,
        name: 'Relógio Digital',
        description: 'Relógio digital à prova d\'água com cronômetro e alarme integrado.',
        price: 'R$ 249,00',
        image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Rel%C3%B3gio+Digital'
    },
    {
        id: 7,
        name: 'Cafeteira Elétrica',
        description: 'Cafeteira elétrica com capacidade para 1,5 litros, ideal para preparar seu café matinal.',
        price: 'R$ 199,00',
        image: 'https://via.placeholder.com/150/000080/FFFFFF?text=Cafeteira+El%C3%A9trica'
    },
    {
        id: 8,
        name: 'Jaqueta de Couro',
        description: 'Jaqueta de couro sintético, resistente e elegante, perfeita para dias frios.',
        price: 'R$ 349,00',
        image: 'https://via.placeholder.com/150/808080/FFFFFF?text=Jaqueta+de+Couro'
    },
    {
        id: 9,
        name: 'Teclado Mecânico',
        description: 'Teclado mecânico para gamers, com iluminação RGB e teclas programáveis.',
        price: 'R$ 599,00',
        image: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Teclado+Mec%C3%A2nico'
    },
    {
        id: 10,
        name: 'Smart TV 50"',
        description: 'Smart TV de 50 polegadas, resolução 4K, com acesso a aplicativos de streaming.',
        price: 'R$ 3.299,00',
        image: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Smart+TV+50%22'
    }
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
