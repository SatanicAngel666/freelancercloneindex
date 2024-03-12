              // Slider logo 2Container
              const sliderWrapperTwo = document.querySelector('.slider2-wrapper');
              const prevButton2 = document.querySelector('.slider2-controls button:nth-child(1)');
              const nextButton2 = document.querySelector('.slider2-controls button:nth-child(2)');
              let currentIndex2 = 0;
      
              function showSlideTwo(index2) {
                const slides2 = document.querySelectorAll('.slide2');
                const slideWidth2 = slides2[0].offsetWidth;
                const newPosition2 = -index2 * slideWidth2;
                sliderWrapperTwo.style.transform = `translateX(${newPosition2}px)`;
      
      
                // Disable/enable buttons based on the current index
                prevButton2.disabled = index2 === 0;
                nextButton2.disabled = index2 === slides2.length - 2;
              }
      
              function nextSlideTwo() {
                currentIndex2 = (currentIndex2 + 3) % document.querySelectorAll('.slide2').length;
                showSlideTwo(currentIndex2);
              }
      
              function prevSlideTwo() {
                currentIndex2 = (currentIndex2 - 3 + document.querySelectorAll('.slide2').length) % document.querySelectorAll('.slide2').length;
                showSlideTwo(currentIndex2);
              }
      
              // Handle window resize
              window.addEventListener('resize', () => {
                currentIndex2 = 0;
                showSlideTwo(currentIndex2);
              });
      
      
              // Initialize
              showSlideTwo(currentIndex2);