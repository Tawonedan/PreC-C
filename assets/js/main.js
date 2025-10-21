document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSearch();
    initScrollEffects();
    initNotifications();
    initImageCarousel();
    initProductPagination();
});

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('translate-x-full');
            mobileMenu.classList.toggle('translate-x-0');
            
            if (overlay) {
                overlay.classList.toggle('hidden');
            }
            
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileMenu.classList.contains('translate-x-0')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            overlay.classList.add('hidden');
            
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }
}

function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');
    
    if (searchToggle && searchInput && searchContainer) {
        searchToggle.addEventListener('click', function() {
            searchContainer.classList.toggle('hidden');
            if (!searchContainer.classList.contains('hidden')) {
                searchInput.focus();
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
                searchContainer.classList.add('hidden');
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    performSearch(query);
                }
            }
        });
    }
}

function performSearch(query) {
    console.log('Mencari:', query);
    alert(`Sedang mencari: "${query}"`);
}

function initScrollEffects() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, section').forEach(el => {
        observer.observe(el);
    });
}

function initNotifications() {
    if (!document.getElementById('notification-container')) {
        const notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.className = 'fixed top-4 right-4 z-50 space-y-2';
        document.body.appendChild(notificationContainer);
    }
}

function showNotification(message, type = 'success', duration = 3000) {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification transform transition-all duration-300 translate-x-full opacity-0`;
    
    const baseClasses = 'px-6 py-4 rounded-lg shadow-lg text-white font-medium flex items-center space-x-3 max-w-sm';
    let typeClasses = '';
    
    switch (type) {
        case 'success':
            typeClasses = 'bg-green-500';
            break;
        case 'error':
            typeClasses = 'bg-red-500';
            break;
        case 'warning':
            typeClasses = 'bg-yellow-500';
            break;
        case 'info':
            typeClasses = 'bg-blue-500';
            break;
        default:
            typeClasses = 'bg-gray-500';
    }
    
    notification.className = `${baseClasses} ${typeClasses} ${notification.className}`;
    
    let iconName = 'check-circle';
    switch (type) {
        case 'error':
            iconName = 'x-circle';
            break;
        case 'warning':
            iconName = 'alert-triangle';
            break;
        case 'info':
            iconName = 'info';
            break;
    }
    
    notification.innerHTML = `
        <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
        <span>${message}</span>
        <button class="ml-auto flex-shrink-0" onclick="this.parentElement.remove()">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full', 'opacity-0');
    }, 100);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, duration);
}


document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.matches('button[type="submit"], .btn-loading')) {
        const button = e.target;
        const originalText = button.textContent;
        
        button.disabled = true;
        button.innerHTML = `
            <i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i>
            Loading...
        `;
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, 2000);
    }
});

function initImageCarousel() {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;
    
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('hidden', i !== index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('bg-white', i === index);
            indicator.classList.toggle('bg-white/50', i !== index);
        });
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    
    setInterval(nextImage, 5000);
    
    showImage(0);
}

function initProductPagination() {
    const productContainer = document.getElementById('featured-products');
    if (!productContainer) return;
    
    const products = productContainer.querySelectorAll('.product-card');
    const prevBtn = document.getElementById('products-prev');
    const nextBtn = document.getElementById('products-next');
    const prevBtnMobile = document.getElementById('products-prev-mobile');
    const nextBtnMobile = document.getElementById('products-next-mobile');
    const pageIndicator = document.getElementById('page-indicator');
    
    if (products.length <= 4) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (prevBtnMobile) prevBtnMobile.style.display = 'none';
        if (nextBtnMobile) nextBtnMobile.style.display = 'none';
        if (pageIndicator) pageIndicator.style.display = 'none';
        return;
    }
    
    let currentPage = 0;
    const productsPerPage = 4;
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    function showPage(page) {
        const startIndex = page * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        products.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
        
        if (prevBtn) {
            prevBtn.disabled = page === 0;
            prevBtn.classList.toggle('opacity-50', page === 0);
        }
        if (nextBtn) {
            nextBtn.disabled = page >= totalPages - 1;
            nextBtn.classList.toggle('opacity-50', page >= totalPages - 1);
        }
        
        if (prevBtnMobile) {
            prevBtnMobile.disabled = page === 0;
            prevBtnMobile.classList.toggle('opacity-50', page === 0);
        }
        if (nextBtnMobile) {
            nextBtnMobile.disabled = page >= totalPages - 1;
            nextBtnMobile.classList.toggle('opacity-50', page >= totalPages - 1);
        }
        
        if (pageIndicator) {
            pageIndicator.textContent = `Page ${page + 1} of ${totalPages}`;
        }
    }
    
    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }
    
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextPage);
    if (prevBtn) prevBtn.addEventListener('click', prevPage);
    
    if (nextBtnMobile) nextBtnMobile.addEventListener('click', nextPage);
    if (prevBtnMobile) prevBtnMobile.addEventListener('click', prevPage);
    
    showPage(0);
}

window.showNotification = showNotification;

