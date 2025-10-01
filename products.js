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
            name: 'Sombrero Charro Tradicional',
            nameEn: 'Traditional Charro Hat',
            nameZh: '传统牛仔帽',
            description: 'Sombrero charro tradicional mexicano con detalles dorados y acabado artesanal.',
            descriptionEn: 'Traditional Mexican charro hat with golden details and artisanal finish.',
            descriptionZh: '传统墨西哥牛仔帽，带有金色细节和手工完成。',
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
            nameZh: '高级牛仔帽',
            description: 'Sombrero Rodeo de alta calidad con materiales premium.',
            descriptionEn: 'High-quality cowboy hat with premium materials.',
            descriptionZh: '高品质牛仔帽，采用优质材料。',
            price: 3200,
            image: 'images/rodeo.jpg',
            category: 'caballero',
            sizes: [54, 56, 58, 60],
            gender: 'Caballero'
        },
        {
            id: 9,
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
        
        // Damas
        {
            id: 3,
            name: 'Sombrero Marinero',
            nameEn: 'Sailor Hat',
            nameZh: '水手帽',
            description: 'Sombrero elegante estilo marinero con cinta rosa y acabado artesanal.',
            descriptionEn: 'Elegant sailor-style hat with pink ribbon and artisanal finish.',
            descriptionZh: '优雅的水手风格帽子，带有粉色丝带和手工完成。',
            price: 1800,
            image: 'images/marinero.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 5,
            name: 'Sombrero Dama Tradicional',
            nameEn: 'Traditional Lady Hat',
            nameZh: '传统女士帽',
            description: 'Sombrero dama tradicional con banda blanca y negra.',
            descriptionEn: 'Traditional lady hat with white and black band.',
            descriptionZh: '传统女士帽，带有白色和黑色带子。',
            price: 4500,
            image: 'images/sombrero4.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 6,
            name: 'Sombrero Catrina Dama',
            nameEn: 'Catrina Lady Hat',
            nameZh: '卡特里娜女士帽',
            description: 'Sombrero elegante estilo catrina para damas con detalles artesanales.',
            descriptionEn: 'Elegant catrina-style hat for ladies with artisanal details.',
            descriptionZh: '优雅的卡特里娜风格女士帽子，带有手工细节。',
            price: 2800,
            image: 'images/catrin.dama.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        {
            id: 7,
            name: 'Sombrero Dama Elegante',
            nameEn: 'Elegant Lady Hat',
            nameZh: '优雅女士帽',
            description: 'Sombrero elegante para damas con acabado refinado.',
            descriptionEn: 'Elegant hat for ladies with refined finish.',
            descriptionZh: '优雅的女士帽子，带有精致的完成。',
            price: 2200,
            image: 'images/dama.jpg',
            category: 'dama',
            sizes: [55, 57],
            gender: 'Dama'
        },
        
        // Niñas
        {
            id: 8,
            name: 'Sombrero Espíri',
            nameEn: 'Espiri Hat',
            nameZh: '精神帽',
            description: 'Sombrero con diseño espiri y significado cultural.',
            descriptionEn: 'Hat with espiri design and cultural meaning.',
            descriptionZh: '具有精神设计和文化意义的帽子。',
            price: 1900,
            image: 'images/espiri.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        {
            id: 10,
            name: 'Sombrero Niña Tradicional',
            nameEn: 'Traditional Girl Hat',
            nameZh: '传统女孩帽',
            description: 'Sombrero tradicional para niñas con diseño colorido.',
            descriptionEn: 'Traditional hat for girls with colorful design.',
            descriptionZh: '传统女孩帽子，带有彩色设计。',
            price: 1500,
            image: 'images/sombrero3.jpg',
            category: 'nina',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niña'
        },
        
        // Niños
        {
            id: 11,
            name: 'Sombrero Niño Charro',
            nameEn: 'Boy Charro Hat',
            nameZh: '男孩牛仔帽',
            description: 'Sombrero charro tradicional para niños con detalles dorados.',
            descriptionEn: 'Traditional charro hat for boys with golden details.',
            descriptionZh: '传统男孩牛仔帽，带有金色细节。',
            price: 1200,
            image: 'images/sombrero2.jpg',
            category: 'nino',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niño'
        },
        {
            id: 12,
            name: 'Sombrero Niño Aventurero',
            nameEn: 'Adventure Boy Hat',
            nameZh: '冒险男孩帽',
            description: 'Sombrero estilo aventurero para niños con diseño clásico.',
            descriptionEn: 'Adventure-style hat for boys with classic design.',
            descriptionZh: '冒险风格的男孩帽子，带有经典设计。',
            price: 1000,
            image: 'images/indiana.jpg',
            category: 'nino',
            sizes: ['XS', 'S', 'M', 'L'],
            gender: 'Niño'
        },
        {
            id: 13,
            name: 'Sombrero Niño Rodeo',
            nameEn: 'Boy Rodeo Hat',
            nameZh: '男孩牛仔帽',
            description: 'Sombrero rodeo para niños con materiales resistentes.',
            descriptionEn: 'Rodeo hat for boys with durable materials.',
            descriptionZh: '男孩牛仔帽，采用耐用材料。',
            price: 1100,
            image: 'images/rodeo.jpg',
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

.search-hero {
    position: relative;
    z-index: 2;
    text-align: center;
}

.search-title h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.search-title p {
    color: rgba(255,255,255,0.9);
    font-size: 1.2rem;
    margin-bottom: 3rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.mega-search-container {
    max-width: 800px;
    margin: 0 auto;
}

.search-input-wrapper {
    position: relative;
    background: white;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
}

.search-input-wrapper:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.search-icon {
    padding: 0 1rem;
    color: var(--primary-color);
    font-size: 1.2rem;
}

#productSearch {
    flex: 1;
    border: none;
    outline: none;
    padding: 1.5rem 1rem;
    font-size: 1.1rem;
    background: transparent;
    color: var(--text-primary);
}

#productSearch::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
}

.mega-search-btn {
    background: linear-gradient(45deg, var(--primary-color), #d4af37);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 40px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.mega-search-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
    background: linear-gradient(45deg, #d4af37, var(--primary-color));
}

.search-suggestions {
    text-align: center;
}

.suggestion-label {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
}

.suggestion-tags {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.suggestion-tag {
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
}

.suggestion-tag:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.results-count {
    text-align: center;
    margin-top: 1rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.product-categories {
    background: var(--bg-secondary);
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
}

.categories-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.category-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    border-radius: 25px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
}

.category-btn:hover,
.category-btn.active {
    background: var(--primary-color);
    color: white;
}

.products-section {
    padding: 4rem 0;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.product-card {
    background: var(--card-bg);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow-hover);
}

.product-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.quick-view-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: var(--transition);
}

.quick-view-btn:hover {
    background: var(--primary-hover);
    transform: scale(1.1);
}

.product-info {
    padding: 1.5rem;
}

.product-name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.product-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.5;
}

.product-gender {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-weight: 500;
}

.product-sizes {
    margin-bottom: 1rem;
}

.product-sizes strong {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.sizes-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.size-tag {
    background: var(--primary-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
}

.product-price {
    margin-bottom: 1rem;
}

.price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.add-to-cart-btn {
    width: 100%;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.add-to-cart-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
}

.size-guide {
    background: var(--bg-secondary);
    padding: 4rem 0;
}

.size-tables {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.size-table {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
}

.size-table h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.size-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 1rem;
}

.size-item {
    background: var(--primary-color);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.size-item:hover,
.size-item.active {
    background: var(--primary-hover);
    transform: scale(1.05);
}

.product-details-modal {
    z-index: 10000;
}

.product-details-content {
    max-width: 800px;
    width: 90%;
}

.product-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
}

.product-details-image img {
    width: 100%;
    border-radius: 10px;
}

.product-details-info h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.product-details-gender {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
    color: var(--primary-color);
    font-weight: 500;
}

.product-details-sizes h4 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.product-details-price .price {
    font-size: 2rem;
    margin: 1rem 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .search-title h2 {
        font-size: 2rem;
    }
    
    .search-title p {
        font-size: 1rem;
    }
    
    .search-input-wrapper {
        flex-direction: column;
        padding: 1rem;
        border-radius: 20px;
    }
    
    .search-icon {
        display: none;
    }
    
    #productSearch {
        padding: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .mega-search-btn {
        width: 100%;
        justify-content: center;
    }
    
    .suggestion-tags {
        gap: 0.5rem;
    }
    
    .suggestion-tag {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
    
    .categories-nav {
        flex-direction: column;
        align-items: center;
    }
    
    .category-btn {
        width: 200px;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    .product-details {
        grid-template-columns: 1fr;
    }
    
    .size-tables {
        grid-template-columns: 1fr;
    }
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = productsCSS;
document.head.appendChild(style);
