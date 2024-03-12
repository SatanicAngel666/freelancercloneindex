const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.slider-controls button:nth-child(1)');
const nextButton = document.querySelector('.slider-controls button:nth-child(2)');
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;
  const newPosition = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${newPosition}px)`;


  // Disable/enable buttons based on the current index
  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 3;
}

function nextSlide() {
  currentIndex = (currentIndex + 3) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 3 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

// Handle window resize
window.addEventListener('resize', () => {
  currentIndex = 0;
  showSlide(currentIndex);
});


// Initialize
showSlide(currentIndex);
