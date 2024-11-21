document.addEventListener('DOMContentLoaded', () => {
    // Slider Functionality
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        // Reset all slides and indicators
        sliderItems.forEach(item => {
            item.classList.remove('active');
            item.style.zIndex = '0';  // Tambahkan baris ini
        });
        indicators.forEach(indicator => indicator.classList.remove('active'));
    
        // Show current slide
        sliderItems[index].classList.add('active');
        sliderItems[index].style.zIndex = '1';  // Tambahkan baris ini
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Event listeners for manual navigation
    nextBtn.addEventListener('click', () => {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    // Animasi produk
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Fungsi keranjang belanja sederhana
    const cartButtons = document.querySelectorAll('.product-card button');
    const cartBtn = document.getElementById('cart-btn');
    let cartItems = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            cartBtn.textContent = `🛒 (${cartItems})`;
            alert('Produk ditambahkan ke keranjang!');
        });
    });

    // Fungsi pencarian sederhana
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const query = prompt('Masukkan kata kunci pencarian:');
        if (query) {
            alert(`Anda mencari: ${query}`);
        }
    });
});