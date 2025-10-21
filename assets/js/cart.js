let cart = [];

function initCart() {
    const savedCart = localStorage.getItem('prec-c-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart from localStorage:', e);
            cart = [];
        }
    }
    updateCartDisplay();
}

function saveCart() {
    try {
        localStorage.setItem('prec-c-cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart to localStorage:', e);
    }
}

function addToCart(productId, productName, productPrice, productImage) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            image: productImage,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartDisplay();
    
    if (typeof showNotification === 'function') {
        showNotification(`${productName} ditambahkan ke keranjang!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    
    if (typeof showNotification === 'function') {
        showNotification('Item dihapus dari keranjang');
    }
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartDisplay();
        }
    }
}

function getCart() {
    return cart;
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = getCartItemCount();
    });
    
    if (document.getElementById('cart-items')) {
        updateCartPage();
    }
}

function updateCartPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartDiv = document.getElementById('empty-cart');
    const cartContentDiv = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        if (emptyCartDiv) emptyCartDiv.classList.remove('hidden');
        if (cartContentDiv) cartContentDiv.classList.add('hidden');
        return;
    }
    
    if (emptyCartDiv) emptyCartDiv.classList.add('hidden');
    if (cartContentDiv) cartContentDiv.classList.remove('hidden');
    
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item bg-white rounded-lg shadow-md p-6" data-product-id="${item.id}">
                <div class="flex items-center space-x-4">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                    
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                        <p class="text-gray-600">Rp.${item.price.toFixed(3)} per item</p>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                        <button class="quantity-btn decrease w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100" data-product-id="${item.id}">
                            <i data-lucide="minus" class="w-4 h-4"></i>
                        </button>
                        <span class="quantity w-12 text-center font-semibold">${item.quantity}</span>
                        <button class="quantity-btn increase w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100" data-product-id="${item.id}">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                        </button>
                    </div>
                    
                    <div class="text-right">
                        <div class="text-lg font-semibold text-gray-800">Rp.${(item.price * item.quantity).toFixed(3)}</div>
                        <button class="remove-btn text-red-500 hover:text-red-700 text-sm font-medium mt-1" data-product-id="${item.id}">Hapus</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        addCartItemEventListeners();
    }
    
    updateOrderSummary();
}

function addCartItemEventListeners() {
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const isIncrease = this.classList.contains('increase');
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                const newQuantity = isIncrease ? item.quantity + 1 : item.quantity - 1;
                updateQuantity(productId, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            removeFromCart(productId);
        });
    });
}

function updateOrderSummary() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 9.99; 
    const tax = subtotal * 0.08; 
    const total = subtotal + shipping + tax;
    
    const subtotalElement = document.getElementById('subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = `Rp. ${subtotal.toFixed(3)}`;
    }
    
    const shippingElement = document.getElementById('shipping');
    if (shippingElement) {
        shippingElement.textContent = shipping === 0 ? 'Free' : `Rp. ${shipping.toFixed(3)}`;
    }
    
    const taxElement = document.getElementById('tax');
    if (taxElement) {
        taxElement.textContent = `Rp. ${tax.toFixed(3)}`;
    }
    
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `Rp. ${total.toFixed(3)}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            
            const productId = e.target.getAttribute('data-product-id');
            const productName = e.target.getAttribute('data-product-name');
            const productPrice = e.target.getAttribute('data-product-price');
            const productImage = e.target.getAttribute('data-product-image');
            
            if (productId && productName && productPrice && productImage) {
                addToCart(productId, productName, productPrice, productImage);
            }
        }
    });
    
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', function() {
            if (!window.location.pathname.includes('cart.html')) {
                window.location.href = 'cart.html';
            }
        });
    }
});

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.getCart = getCart;
window.getCartTotal = getCartTotal;
window.getCartItemCount = getCartItemCount;
window.clearCart = clearCart;
window.updateCartDisplay = updateCartDisplay;

