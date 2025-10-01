// Products page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products page
    initializeProductsPage();
    
    // Initialize search functionality
    initializeSearch();
});

function initializeProductsPage() {
    // Load products data
    loadProducts();
    
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize size guide
    initializeSizeGuide();
}

function initializeSearch() {
    const searchInput = document.getElementById('productSearch');
    const searchBtn = document.getElementById('searchBtn');
    const suggestionTags = document.querySelectorAll('.suggestion-tag');
    
    // Search on input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterProducts(searchTerm);
    });
    
    // Search on button click
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterProducts(searchTerm);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value.toLowerCase();
            filterProducts(searchTerm);
        }
    });
    
    // Suggestion tags functionality
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const searchTerm = tag.getAttribute('data-search');
            searchInput.value = searchTerm;
            filterProducts(searchTerm);
            
            // Add visual feedback
            tag.style.background = 'rgba(255,255,255,0.4)';
            setTimeout(() => {
                tag.style.background = 'rgba(255,255,255,0.2)';
            }, 200);
        });
    });
}

function filterProducts(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
        const productGender = card.querySelector('.product-gender span').textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');
        
        const matchesSearch = searchTerm === '' || 
            productName.includes(searchTerm) || 
            productDescription.includes(searchTerm) ||
            productGender.includes(searchTerm);
        
        const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update results count
    updateResultsCount();
}

function updateResultsCount() {
    const visibleProducts = document.querySelectorAll('.product-card[style*="block"], .product-card:not([style*="none"])');
    const resultsCount = document.getElementById('resultsCount') || createResultsCount();
    resultsCount.textContent = `${visibleProducts.length} productos encontrados`;
}

function createResultsCount() {
    const searchSection = document.querySelector('.search-section');
    const resultsCount = document.createElement('div');
    resultsCount.id = 'resultsCount';
    resultsCount.className = 'results-count';
    searchSection.appendChild(resultsCount);
    return resultsCount;
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const products = getDetailedProducts();
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function getDetailedProducts() {
    return [
        // Caballeros
        {
            id: 1,
            name: 'Sombrero Catrin',
            nameEn: 'Catrin Hat',
            nameZh: '卡特林帽',
            description: 'Sombrero catrin elegante con detalles dorados y acabado artesanal.',
            descriptionEn: 'Elegant catrin hat with golden details and artisanal finish.',
            descriptionZh: '优雅的卡特林帽，带有金色细节和手工完成。',
            price: 2500,
            image: 'images/sombrero2.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 2,
            name: 'Sombrero Rodeo',
            nameEn: 'Rodeo Hat',
            nameZh: '牛仔帽',
            description: 'Sombrero rodeo de alta calidad con materiales premium.',
            descriptionEn: 'High-quality rodeo hat with premium materials.',
            descriptionZh: '高品质牛仔帽，采用优质材料。',
            price: 3200,
            image: 'images/rodeo.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 3,
            name: 'Sombrero Cholo',
            nameEn: 'Cholo Hat',
            nameZh: '乔洛帽',
            description: 'Sombrero cholo con estilo urbano y diseño característico.',
            descriptionEn: 'Cholo hat with urban style and characteristic design.',
            descriptionZh: '乔洛帽，具有城市风格和特色设计。',
            price: 2800,
            image: 'images/sombrero3.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 4,
            name: 'Sombrero Indiana',
            nameEn: 'Indiana Hat',
            nameZh: '印第安纳帽',
            description: 'Sombrero estilo aventurero con diseño clásico.',
            descriptionEn: 'Adventure-style hat with classic design.',
            descriptionZh: '冒险风格的帽子，带有经典设计。',
            price: 2100,
            image: 'images/indiana.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 5,
            name: 'Sombrero Super Bronco',
            nameEn: 'Super Bronco Hat',
            nameZh: '超级野马帽',
            description: 'Sombrero super bronco resistente para actividades al aire libre.',
            descriptionEn: 'Durable super bronco hat for outdoor activities.',
            descriptionZh: '耐用的超级野马帽，适合户外活动。',
            price: 3500,
            image: 'images/sombrero4.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 6,
            name: 'Sombrero Gallero',
            nameEn: 'Gallero Hat',
            nameZh: '斗鸡帽',
            description: 'Sombrero gallero tradicional para eventos especiales.',
            descriptionEn: 'Traditional gallero hat for special events.',
            descriptionZh: '传统斗鸡帽，适合特殊场合。',
            price: 2900,
            image: 'images/catrin.dama.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 7,
            name: 'Sombrero Pescador',
            nameEn: 'Fisherman Hat',
            nameZh: '渔夫帽',
            description: 'Sombrero pescador práctico para actividades acuáticas.',
            descriptionEn: 'Practical fisherman hat for water activities.',
            descriptionZh: '实用的渔夫帽，适合水上活动。',
            price: 1800,
            image: 'images/marinero.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 8,
            name: 'Sombrero Alicia',
            nameEn: 'Alicia Hat',
            nameZh: '爱丽丝帽',
            description: 'Sombrero alicia elegante con estilo clásico.',
            descriptionEn: 'Elegant alicia hat with classic style.',
            descriptionZh: '优雅的爱丽丝帽，具有经典风格。',
            price: 2200,
            image: 'images/dama.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        
        // Damas
        {
            id: 9,
            name: 'Sombrero Normal',
            nameEn: 'Normal Hat',
            nameZh: '普通帽',
            description: 'Sombrero normal elegante para damas con diseño clásico.',
            descriptionEn: 'Elegant normal hat for ladies with classic design.',
            descriptionZh: '优雅的普通女士帽，具有经典设计。',
            price: 1800,
            image: 'images/marinero.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 10,
            name: 'Sombrero Golf',
            nameEn: 'Golf Hat',
            nameZh: '高尔夫帽',
            description: 'Sombrero golf deportivo para damas activas.',
            descriptionEn: 'Sporty golf hat for active ladies.',
            descriptionZh: '运动型高尔夫帽，适合活跃的女士。',
            price: 2000,
            image: 'images/sombrero4.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 11,
            name: 'Sombrero Viceras',
            nameEn: 'Viceras Hat',
            nameZh: '维塞拉斯帽',
            description: 'Sombrero viceras elegante con estilo sofisticado.',
            descriptionEn: 'Elegant viceras hat with sophisticated style.',
            descriptionZh: '优雅的维塞拉斯帽，具有精致风格。',
            price: 2500,
            image: 'images/catrin.dama.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 12,
            name: 'Sombrero Gorra',
            nameEn: 'Cap Hat',
            nameZh: '帽子',
            description: 'Sombrero gorra casual para damas modernas.',
            descriptionEn: 'Casual cap hat for modern ladies.',
            descriptionZh: '休闲帽子，适合现代女士。',
            price: 1500,
            image: 'images/dama.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 13,
            name: 'Sombrero Coletero',
            nameEn: 'Coletero Hat',
            nameZh: '科莱特罗帽',
            description: 'Sombrero coeltero tradicional con detalles artesanales.',
            descriptionEn: 'Traditional coeltero hat with artisanal details.',
            descriptionZh: '传统科莱特罗帽，带有手工细节。',
            price: 2200,
            image: 'images/sombrero2.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        
        // Niñas
        {
            id: 14,
            name: 'Sombrero Normal',
            nameEn: 'Normal Hat',
            nameZh: '普通帽',
            description: 'Sombrero normal para niñas con diseño colorido y divertido.',
            descriptionEn: 'Normal hat for girls with colorful and fun design.',
            descriptionZh: '普通女孩帽，带有彩色和有趣的设计。',
            price: 1200,
            image: 'images/sombrero3.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        {
            id: 15,
            name: 'Sombrero Golf',
            nameEn: 'Golf Hat',
            nameZh: '高尔夫帽',
            description: 'Sombrero golf deportivo para niñas activas.',
            descriptionEn: 'Sporty golf hat for active girls.',
            descriptionZh: '运动型高尔夫帽，适合活跃的女孩。',
            price: 1300,
            image: 'images/espiri.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        {
            id: 16,
            name: 'Sombrero Gorra',
            nameEn: 'Cap Hat',
            nameZh: '帽子',
            description: 'Sombrero gorra casual para niñas modernas.',
            descriptionEn: 'Casual cap hat for modern girls.',
            descriptionZh: '休闲帽子，适合现代女孩。',
            price: 1000,
            image: 'images/sombrero2.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        {
            id: 17,
            name: 'Sombrero Coletero',
            nameEn: 'Coletero Hat',
            nameZh: '科莱特罗帽',
            description: 'Sombrero coeltero tradicional para niñas con detalles artesanales.',
            descriptionEn: 'Traditional coeltero hat for girls with artisanal details.',
            descriptionZh: '传统科莱特罗女孩帽，带有手工细节。',
            price: 1400,
            image: 'images/marinero.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        
        // Niños
        {
            id: 18,
            name: 'Sombrero Gachito',
            nameEn: 'Gachito Hat',
            nameZh: '加奇托帽',
            description: 'Sombrero gachito tradicional para niños con estilo mexicano.',
            descriptionEn: 'Traditional gachito hat for boys with Mexican style.',
            descriptionZh: '传统加奇托男孩帽，具有墨西哥风格。',
            price: 1000,
            image: 'images/sombrero2.jpg',
            category: 'nino',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niño'
        },
        {
            id: 19,
            name: 'Sombrero Rodeito',
            nameEn: 'Rodeito Hat',
            nameZh: '小牛仔帽',
            description: 'Sombrero rodeito pequeño para niños aventureros.',
            descriptionEn: 'Small rodeito hat for adventurous boys.',
            descriptionZh: '小牛仔帽，适合冒险的男孩。',
            price: 1100,
            image: 'images/rodeo.jpg',
            category: 'nino',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niño'
        },
        {
            id: 20,
            name: 'Sombrero Indianita',
            nameEn: 'Indianita Hat',
            nameZh: '小印第安纳帽',
            description: 'Sombrero indianita estilo aventurero para niños.',
            descriptionEn: 'Adventure-style indianita hat for boys.',
            descriptionZh: '冒险风格的小印第安纳男孩帽。',
            price: 1200,
            image: 'images/indiana.jpg',
            category: 'nino',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niño'
        }
    ];
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const sizesHtml = product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('');
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-gender">
                <i class="fas fa-user"></i>
                <span>${product.gender}</span>
            </div>
            <div class="product-sizes">
                <strong>Tallas disponibles:</strong>
                <div class="sizes-container">
                    ${sizesHtml}
                </div>
            </div>
            <div class="product-price">
                <span class="price">$${product.price.toLocaleString()}</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Agregar al Carrito
            </button>
        </div>
    `;
    
    return card;
}

function initializeCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get current search term
            const searchInput = document.getElementById('productSearch');
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            
            // Filter products with both category and search
            filterProducts(searchTerm);
        });
    });
}

function initializeSizeGuide() {
    // Size guide is already in HTML, just add some interactive features
    const sizeItems = document.querySelectorAll('.size-item');
    
    sizeItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all size items
            sizeItems.forEach(si => si.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // You could add functionality to filter products by size here
            setTimeout(() => {
                item.classList.remove('active');
            }, 2000);
        });
    });
}

function showProductDetails(productId) {
    const products = getDetailedProducts();
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Create modal for product details
        const modal = document.createElement('div');
        modal.className = 'modal product-details-modal';
        modal.innerHTML = `
            <div class="modal-content product-details-content">
                <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <div class="product-details">
                    <div class="product-details-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details-info">
                        <h2>${product.name}</h2>
                        <p class="product-details-description">${product.description}</p>
                        <div class="product-details-gender">
                            <i class="fas fa-user"></i>
                            <span>${product.gender}</span>
                        </div>
                        <div class="product-details-sizes">
                            <h4>Tallas disponibles:</h4>
                            <div class="sizes-container">
                                ${product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('')}
                            </div>
                        </div>
                        <div class="product-details-price">
                            <span class="price">$${product.price.toLocaleString()}</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id}); this.parentElement.parentElement.parentElement.remove();">
                            <i class="fas fa-shopping-cart"></i>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// Add CSS for products page
const productsCSS = `
.innovative-search-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #d4af37 50%, #b8941f 100%);
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
}

.innovative-search-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hat-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23hat-pattern)"/></svg>');
    opacity: 0.3;
}

.innovative-search-section::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: searchGlow 8s ease-in-out infinite;
}

@keyframes searchGlow {
    0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.3; }
    50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
}

.search-hero {
    position: relative;
    z-index: 2;
    text-align: center;
}

.search-title h2 {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    animation: titlePulse 3s ease-in-out infinite;
}

@keyframes titlePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.search-title p {
    color: rgba(255,255,255,0.9);
    font-size: 1.3rem;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    animation: subtitleFloat 4s ease-in-out infinite;
}

@keyframes subtitleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.mega-search-container {
    max-width: 900px;
    margin: 0 auto;
}

.search-input-wrapper {
    position: relative;
    background: white;
    border-radius: 50px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
}

.search-input-wrapper:focus-within {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    background: rgba(255,255,255,0.95);
}

.search-icon {
    padding: 0 1.5rem;
    color: var(--primary-color);
    font-size: 1.4rem;
    animation: iconSpin 2s linear infinite;
}

@keyframes iconSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#productSearch {
    flex: 1;
    border: none;
    outline: none;
    padding: 1.8rem 1rem;
    font-size: 1.2rem;
    background: transparent;
    color: var(--text-primary);
    font-weight: 500;
}

#productSearch::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
    transition: all 0.3s ease;
}

#productSearch:focus::placeholder {
    opacity: 0.4;
    transform: translateX(10px);
}

.mega-search-btn {
    background: linear-gradient(45deg, var(--primary-color), #d4af37, #b8941f);
    background-size: 200% 200%;
    color: white;
    border: none;
    padding: 1.2rem 2.5rem;
    border-radius: 40px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.mega-search-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.6);
}

.search-suggestions {
    text-align: center;
    animation: suggestionsFadeIn 1s ease-out 0.5s both;
}

@keyframes suggestionsFadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

.suggestion-label {
    color: rgba(255,255,255,0.9);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    display: block;
    font-weight: 500;
}

.suggestion-tags {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
}

.suggestion-tag {
    background: rgba(255,255,255,0.15);
    color: white;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(15px);
    font-weight: 500;
    position: relative;
    overflow: hidden;
}

.suggestion-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.suggestion-tag:hover::before {
    left: 100%;
}

.suggestion-tag:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    border-color: rgba(255,255,255,0.4);
}

.results-count {
    text-align: center;
    margin-top: 1.5rem;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    font-weight: 500;
    animation: countPulse 2s ease-in-out infinite;
}

@keyframes countPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

.product-categories {
    background: linear-gradient(135deg, var(--bg-secondary) 0%, #f8f9fa 100%);
    padding: 3rem 0;
    border-bottom: 1px solid var(--border-color);
    position: relative;
}

.product-categories::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
}

.categories-nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.category-btn {
    padding: 1rem 2rem;
    border: 3px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.category-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
    transition: left 0.6s ease;
}

.category-btn:hover::before {
    left: 100%;
}

.category-btn:hover,
.category-btn.active {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

.products-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, var(--bg-primary) 100%);
    position: relative;
}

.products-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(212,175,55,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    opacity: 0.5;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
    position: relative;
    z-index: 2;
}

.product-card {
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(212, 175, 55, 0.1);
    position: relative;
    animation: cardFloat 6s ease-in-out infinite;
}

@keyframes cardFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.product-card:nth-child(even) {
    animation-delay: -3s;
}

.product-card:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 25px 60px rgba(0,0,0,0.2);
    border-color: var(--primary-color);
}

.product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), #d4af37, var(--primary-color));
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

.product-image {
    position: relative;
    height: 280px;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: brightness(0.9) contrast(1.1);
}

.product-card:hover .product-image img {
    transform: scale(1.1) rotate(2deg);
    filter: brightness(1) contrast(1.2);
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(184, 148, 31, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(5px);
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.quick-view-btn {
    background: white;
    color: var(--primary-color);
    border: none;
    padding: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.4rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    transform: scale(0.8);
}

.product-card:hover .quick-view-btn {
    transform: scale(1);
}

.quick-view-btn:hover {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
}

.product-info {
    padding: 2rem;
    position: relative;
}

.product-name {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: var(--text-primary);
    line-height: 1.3;
    transition: color 0.3s ease;
}

.product-card:hover .product-name {
    color: var(--primary-color);
}

.product-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 0.95rem;
}

.product-gender {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.product-gender i {
    font-size: 1.1rem;
    animation: genderPulse 2s ease-in-out infinite;
}

@keyframes genderPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.product-sizes {
    margin-bottom: 1.5rem;
}

.product-sizes strong {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--text-primary);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.sizes-container {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
}

.size-tag {
    background: linear-gradient(135deg, var(--primary-color), #d4af37);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(212, 175, 55, 0.3);
}

.size-tag:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.5);
}

.product-price {
    margin-bottom: 1.5rem;
    text-align: center;
}

.price {
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary-color);
    text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
    position: relative;
}

.price::before {
    content: '$';
    font-size: 1.2rem;
    opacity: 0.7;
    margin-right: 0.2rem;
}

.add-to-cart-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--primary-color), #d4af37);
    background-size: 200% 200%;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
    animation: gradientShift 3s ease infinite;
}

.add-to-cart-btn:hover {
    background-position: 100% 50%;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.5);
}

.add-to-cart-btn i {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
}

.add-to-cart-btn:hover i {
    transform: scale(1.2) rotate(10deg);
}

.size-guide {
    background: linear-gradient(135deg, var(--bg-secondary) 0%, #f8f9fa 100%);
    padding: 5rem 0;
    position: relative;
}

.size-guide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
}

.size-tables {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.size-table {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    border: 1px solid rgba(212, 175, 55, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.size-table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), #d4af37);
}

.size-table:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.15);
}

.size-table h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
}

.size-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 1.2rem;
}

.size-item {
    background: linear-gradient(135deg, var(--primary-color), #d4af37);
    color: white;
    padding: 1.2rem;
    border-radius: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    position: relative;
    overflow: hidden;
}

.size-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.size-item:hover::before {
    left: 100%;
}

.size-item:hover,
.size-item.active {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
}

.product-details-modal {
    z-index: 10000;
}

.product-details-content {
    max-width: 900px;
    width: 95%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0,0,0,0.3);
}

.product-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.product-details-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.product-details-info h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 2rem;
}

.product-details-gender {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 1.5rem 0;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.1rem;
}

.product-details-sizes h4 {
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-size: 1.1rem;
}

.product-details-price .price {
    font-size: 2.5rem;
    margin: 1.5rem 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .search-title h2 {
        font-size: 2.2rem;
    }
    
    .search-title p {
        font-size: 1.1rem;
    }
    
    .search-input-wrapper {
        flex-direction: column;
        padding: 1.2rem;
        border-radius: 25px;
    }
    
    .search-icon {
        display: none;
    }
    
    #productSearch {
        padding: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .mega-search-btn {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem;
    }
    
    .suggestion-tags {
        gap: 0.8rem;
    }
    
    .suggestion-tag {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
    }
    
    .categories-nav {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .category-btn {
        width: 250px;
        padding: 1rem 1.5rem;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .product-details {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .size-tables {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .size-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = productsCSS;
document.head.appendChild(style);
