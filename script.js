// Global Variables
let currentUser = null;
let cart = [];
let currentLanguage = 'es';
let currentTheme = 'light';

// Language translations
const translations = {
    es: {
        'tagline': 'Elegancia y tradición en cada sombrero. Descubre nuestra colección artesanal.',
        'nav-home': 'Inicio',
        'nav-products': 'Productos',
        'nav-about': 'Sobre Nosotros',
        'nav-contact': 'Contacto',
        'login': 'Iniciar Sesión',
        'register': 'Registrarse',
        'hero-title': '¡Venta de sombreros a todo México y extranjero!',
        'hero-subtitle': 'FÁBRICA MAYOREO Y MENUDEO',
        'company-info': 'La Palma de Oro<br>Artesanía y tradición en cada sombrero desde 1985',
        'quick-products': 'Productos',
        'quick-products-desc': 'Explora nuestra colección',
        'quick-about': 'Sobre Nosotros',
        'quick-about-desc': 'Nuestra historia',
        'quick-contact': 'Contacto',
        'quick-contact-desc': 'Contáctanos',
        'products-title': 'Nuestros Sombreros',
        'search-placeholder': 'Buscar sombreros...',
        'about-title': 'Sobre Nosotros',
        'about-text': 'Desde 1985, La Palma de Oro ha sido sinónimo de calidad y tradición en la fabricación de sombreros artesanales. Cada pieza es cuidadosamente elaborada por maestros artesanos con décadas de experiencia.',
        'about-text2': 'Nuestro compromiso es ofrecer sombreros únicos que combinen la elegancia tradicional con el estilo contemporáneo, manteniendo la autenticidad de nuestras técnicas ancestrales.',
        'contact-title': 'Contacto',
        'contact-address': 'México',
        'exchange-title': 'Tipos de Cambio',
        'footer-rights': '© 2025 La Palma de Oro. Todos los derechos reservados.',
        'cart-title': 'Carrito de Compras',
        'total': 'Total: $',
        'checkout': 'Proceder al Pago',
        'email': 'Email',
        'password': 'Contraseña',
        'name': 'Nombre',
        'email-placeholder': 'Ingresa tu email',
        'password-placeholder': 'Ingresa tu contraseña',
        'name-placeholder': 'Ingresa tu nombre',
        'add-to-cart': 'Agregar al Carrito',
        'login-required': 'Debes iniciar sesión para comprar',
        'product-added': 'Producto agregado al carrito',
        'login-success': 'Sesión iniciada correctamente',
        'register-success': 'Registro exitoso',
        'logout': 'Cerrar Sesión'
    },
    en: {
        'tagline': 'Elegance and tradition in every hat. Discover our artisanal collection.',
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'login': 'Login',
        'register': 'Register',
        'hero-title': 'Hat sales throughout Mexico and abroad!',
        'hero-subtitle': 'WHOLESALE AND RETAIL FACTORY',
        'company-info': 'La Palma de Oro<br>Artisanry and tradition in every hat since 1985',
        'quick-products': 'Products',
        'quick-products-desc': 'Explore our collection',
        'quick-about': 'About Us',
        'quick-about-desc': 'Our story',
        'quick-contact': 'Contact',
        'quick-contact-desc': 'Contact us',
        'products-title': 'Our Hats',
        'search-placeholder': 'Search hats...',
        'about-title': 'About Us',
        'about-text': 'Since 1985, La Palma de Oro has been synonymous with quality and tradition in the manufacture of artisanal hats. Each piece is carefully crafted by master artisans with decades of experience.',
        'about-text2': 'Our commitment is to offer unique hats that combine traditional elegance with contemporary style, maintaining the authenticity of our ancestral techniques.',
        'contact-title': 'Contact',
        'contact-address': 'Mexico',
        'exchange-title': 'Exchange Rates',
        'footer-rights': '© 2025 La Palma de Oro. All rights reserved.',
        'cart-title': 'Shopping Cart',
        'total': 'Total: $',
        'checkout': 'Proceed to Checkout',
        'email': 'Email',
        'password': 'Password',
        'name': 'Name',
        'email-placeholder': 'Enter your email',
        'password-placeholder': 'Enter your password',
        'name-placeholder': 'Enter your name',
        'add-to-cart': 'Add to Cart',
        'login-required': 'You must login to purchase',
        'product-added': 'Product added to cart',
        'login-success': 'Login successful',
        'register-success': 'Registration successful',
        'logout': 'Logout'
    },
    zh: {
        'tagline': '每顶帽子的优雅与传统。发现我们的手工收藏。',
        'nav-home': '首页',
        'nav-products': '产品',
        'nav-about': '关于我们',
        'nav-contact': '联系我们',
        'login': '登录',
        'register': '注册',
        'hero-title': '向墨西哥和海外销售帽子！',
        'hero-subtitle': '批发和零售工厂',
        'company-info': 'La Palma de Oro<br>自1985年以来每顶帽子的工艺和传统',
        'quick-products': '产品',
        'quick-products-desc': '探索我们的收藏',
        'quick-about': '关于我们',
        'quick-about-desc': '我们的故事',
        'quick-contact': '联系我们',
        'quick-contact-desc': '联系我们',
        'products-title': '我们的帽子',
        'search-placeholder': '搜索帽子...',
        'about-title': '关于我们',
        'about-text': '自1985年以来，La Palma de Oro一直是手工帽子制造质量和传统的代名词。每件作品都由拥有数十年经验的大师工匠精心制作。',
        'about-text2': '我们的承诺是提供独特的帽子，将传统优雅与现代风格相结合，保持我们祖先技术的真实性。',
        'contact-title': '联系我们',
        'contact-address': '墨西哥',
        'exchange-title': '汇率',
        'footer-rights': '© 2025 La Palma de Oro. 版权所有。',
        'cart-title': '购物车',
        'total': '总计：$',
        'checkout': '结账',
        'email': '邮箱',
        'password': '密码',
        'name': '姓名',
        'email-placeholder': '输入您的邮箱',
        'password-placeholder': '输入您的密码',
        'name-placeholder': '输入您的姓名',
        'add-to-cart': '加入购物车',
        'login-required': '您必须登录才能购买',
        'product-added': '产品已加入购物车',
        'login-success': '登录成功',
        'register-success': '注册成功',
        'logout': '退出登录'
    }
};

// Sample products data
const products = [
    {
        id: 1,
        name: 'Sombrero Charro Clásico',
        nameEn: 'Classic Charro Hat',
        nameZh: '经典牛仔帽',
        description: 'Sombrero tradicional mexicano con detalles dorados y acabado artesanal.',
        descriptionEn: 'Traditional Mexican hat with golden details and artisanal finish.',
        descriptionZh: '传统墨西哥帽子，带有金色细节和手工完成。',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop',
        category: 'charro'
    },
    {
        id: 2,
        name: 'Sombrero Vaquero Premium',
        nameEn: 'Premium Cowboy Hat',
        nameZh: '高级牛仔帽',
        description: 'Sombrero vaquero de alta calidad con materiales premium.',
        descriptionEn: 'High-quality cowboy hat with premium materials.',
        descriptionZh: '高品质牛仔帽，采用优质材料。',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        category: 'vaquero'
    },
    {
        id: 3,
        name: 'Sombrero de Fiesta',
        nameEn: 'Party Hat',
        nameZh: '派对帽',
        description: 'Sombrero elegante para ocasiones especiales con decoraciones coloridas.',
        descriptionEn: 'Elegant hat for special occasions with colorful decorations.',
        descriptionZh: '特殊场合的优雅帽子，带有彩色装饰。',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=400&fit=crop',
        category: 'fiesta'
    },
    {
        id: 4,
        name: 'Sombrero de Trabajo',
        nameEn: 'Work Hat',
        nameZh: '工作帽',
        description: 'Sombrero resistente y cómodo para uso diario.',
        descriptionEn: 'Durable and comfortable hat for daily use.',
        descriptionZh: '耐用舒适的工作帽，适合日常使用。',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
        category: 'trabajo'
    },
    {
        id: 5,
        name: 'Sombrero de Lujo',
        nameEn: 'Luxury Hat',
        nameZh: '豪华帽',
        description: 'Sombrero de lujo con materiales exóticos y acabado impecable.',
        descriptionEn: 'Luxury hat with exotic materials and impeccable finish.',
        descriptionZh: '豪华帽子，采用异国材料和完美工艺。',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
        category: 'lujo'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved preferences
    loadPreferences();
    
    // Show welcome message
    showWelcomeMessage();
    
    // Initialize components
    initializeCoverflow();
    initializeTheme();
    initializeLanguage();
    initializeAuth();
    initializeCart();
    initializeProducts();
    initializeSearch();
    initializeModals();
    initializeExchangeRates();
    
    // Load products
    loadProducts();
    
    // Update UI
    updateUI();
}

// Coverflow functionality
function initializeCoverflow() {
    const coverflow = document.getElementById('coverflow');
    const prevBtn = document.getElementById('coverflowPrev');
    const nextBtn = document.getElementById('coverflowNext');
    const items = document.querySelectorAll('.coverflow-item');
    
    let currentIndex = 0;
    
    function updateCoverflow() {
        items.forEach((item, index) => {
            const offset = index - currentIndex;
            const translateX = offset * 75;
            const translateZ = Math.abs(offset) * -25;
            const scale = 1 - Math.abs(offset) * 0.1;
            
            item.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`;
            item.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCoverflow();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCoverflow();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play
    setInterval(nextSlide, 4000);
    
    // Click on items
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateCoverflow();
        });
    });
    
    // Initialize
    updateCoverflow();
}

// Theme functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });
    
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language functionality
function initializeLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en', 'zh'].includes(browserLang)) {
        currentLanguage = browserLang;
    }
    
    languageSelect.value = currentLanguage;
    
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('language', currentLanguage);
        translatePage();
    });
    
    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Handle placeholders
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Authentication functionality
function initializeAuth() {
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    const closeAuth = document.getElementById('closeAuth');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Event listeners
    authBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });
    
    closeAuth.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchTab(tab);
        });
    });
    
    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    
    // Check if user is logged in
    checkAuthStatus();
}

function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(t => t.classList.remove('active'));
    tabBtns.forEach(b => b.classList.remove('active'));
    
    document.getElementById(tab + 'Tab').classList.add('active');
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const users = await loadUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            showNotification(translations[currentLanguage]['login-success']);
            document.getElementById('authModal').style.display = 'none';
            updateAuthUI();
        } else {
            showNotification('Credenciales incorrectas', 'error');
        }
    } catch (error) {
        showNotification('Error al iniciar sesión', 'error');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    try {
        const users = await loadUsers();
        
        if (users.find(u => u.email === email)) {
            showNotification('El email ya está registrado', 'error');
            return;
        }
        
        const newUser = { name, email, password, id: Date.now() };
        users.push(newUser);
        
        await saveUsers(users);
        showNotification(translations[currentLanguage]['register-success']);
        document.getElementById('authModal').style.display = 'none';
        
        // Auto login
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        updateAuthUI();
    } catch (error) {
        showNotification('Error al registrarse', 'error');
    }
}

async function loadUsers() {
    try {
        const response = await fetch('users.txt');
        const text = await response.text();
        return text ? JSON.parse(text) : [];
    } catch (error) {
        return [];
    }
}

async function saveUsers(users) {
    const response = await fetch('save-users.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(users)
    });
    
    if (!response.ok) {
        throw new Error('Error saving users');
    }
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    if (currentUser) {
        authBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        authBtn.onclick = logout;
    } else {
        authBtn.textContent = translations[currentLanguage]['login'];
        authBtn.onclick = () => document.getElementById('authModal').style.display = 'block';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification(translations[currentLanguage]['logout']);
}

// Cart functionality
function initializeCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateCartDisplay();
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('El carrito está vacío', 'error');
            return;
        }
        
        if (!currentUser) {
            showNotification(translations[currentLanguage]['login-required'], 'error');
            document.getElementById('authModal').style.display = 'block';
            return;
        }
        
        // Simulate checkout
        showNotification('¡Compra realizada con éxito!', 'success');
        cart = [];
        updateCartCount();
        cartModal.style.display = 'none';
    });
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function addToCart(product) {
    if (!currentUser) {
        showNotification(translations[currentLanguage]['login-required'], 'error');
        document.getElementById('authModal').style.display = 'block';
        return;
    }
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(translations[currentLanguage]['product-added'], 'success');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>El carrito está vacío</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    }
}

// Products functionality
function initializeProducts() {
    // Products will be loaded dynamically
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = products.map(product => {
        const name = currentLanguage === 'en' ? product.nameEn : 
                    currentLanguage === 'zh' ? product.nameZh : product.name;
        const description = currentLanguage === 'en' ? product.descriptionEn : 
                          currentLanguage === 'zh' ? product.descriptionZh : product.description;
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <p class="product-description">${description}</p>
                    <div class="product-price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        ${translations[currentLanguage]['add-to-cart']}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('productSearch');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Modal functionality
function initializeModals() {
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Exchange rates functionality
function initializeExchangeRates() {
    updateExchangeRates();
    setInterval(updateExchangeRates, 300000); // Update every 5 minutes
}

async function updateExchangeRates() {
    try {
        // Using a free exchange rate API
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        const usdRate = data.rates.MXN;
        const cnyRate = data.rates.MXN / data.rates.CNY;
        
        document.getElementById('usdRate').textContent = `USD/MXN: $${usdRate.toFixed(2)}`;
        document.getElementById('cnyRate').textContent = `CNY/MXN: $${cnyRate.toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Fallback rates
        document.getElementById('usdRate').textContent = 'USD/MXN: $17.20';
        document.getElementById('cnyRate').textContent = 'CNY/MXN: $2.40';
    }
}

// Welcome message with typewriter effect
function showWelcomeMessage() {
    const welcomeModal = document.getElementById('welcomeModal');
    const typewriterText = document.getElementById('typewriterText');
    const typewriterCursor = document.querySelector('.typewriter-cursor');
    
    // Welcome messages in different languages
    const welcomeMessages = {
        es: "Bienvenidos a La Palma de Oro, donde la artesanía y la tradición de cada sombrero cobra vida",
        en: "Welcome to La Palma de Oro, where the craftsmanship and tradition of every hat comes to life",
        zh: "欢迎来到La Palma de Oro，每顶帽子的工艺和传统都在这里焕发生机"
    };
    
    const message = welcomeMessages[currentLanguage] || welcomeMessages.es;
    
    // Show modal
    welcomeModal.style.display = 'block';
    
    // Typewriter effect
    let i = 0;
    const typeSpeed = 80; // milliseconds per character
    
    function typeWriter() {
        if (i < message.length) {
            typewriterText.textContent += message.charAt(i);
            i++;
            
            // Play typewriter sound
            playTypewriterSound();
            
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Hide cursor after typing is complete
            setTimeout(() => {
                typewriterCursor.style.display = 'none';
            }, 1000);
            
            // Hide modal after 2 seconds
            setTimeout(() => {
                welcomeModal.style.opacity = '0';
                setTimeout(() => {
                    welcomeModal.style.display = 'none';
                }, 500);
            }, 2000);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Typewriter sound effect
function playTypewriterSound() {
    // Create audio context for typewriter sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Generate typewriter-like sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure sound
    oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
    oscillator.type = 'square';
    
    // Volume envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    // Play sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Utility functions
function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
}

function updateUI() {
    updateAuthUI();
    updateCartCount();
    translatePage();
    loadProducts();
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);