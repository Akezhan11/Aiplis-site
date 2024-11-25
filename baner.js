
const slider = document.querySelector('.slider');
const navButtons = document.querySelectorAll('.slider-nav a');
let currentIndex = 0; 
const slideInterval = 7000; 


function goToSlide(index) {
    const slideWidth = slider.offsetWidth; 
    const scrollPosition = slideWidth * index; 
    slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth', 
    });

    
    navButtons.forEach((button, i) => {
        button.style.opacity = i === index ? '1' : '0.75';
    });
    currentIndex = index;
}


navButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        goToSlide(index);
    });
});


function startAutoSlide() {
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % navButtons.length; // Индекс следующего слайда
        goToSlide(nextIndex);
    }, slideInterval);
}


startAutoSlide();
