


   // GSAP Animation\\
    const verticalLine = document.getElementById('vertical-line');
    const verticalLine2 = document.getElementById('vertical-line2');
    const logo = document.getElementById('imglogo');
    
    const drawTextMake = gsap.timeline({
      scrollTrigger: {
        trigger: "#make-sec-id",
        start: "top-=400", 
        end: "bottom",
       // markers: true,
      }
    });



    const drawLineWithLogo = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#make-sec-id",
          start: "top-=400", 
          end: "bottom",
         // markers: true,
        }
      }
    );
        // Animation for text 
    drawTextMake.from("#make-main-wrapper-id div",{opacity:0,duration:0.4,stagger:0.05,ease:"power1.inOut"});
 
      // Define the media query
      const mediaQuery = window.matchMedia("(max-width: 760px)");

      // Function to handle changes in viewport size
      function handleViewportChange(event) {
        if (event.matches) {
          // Code to execute when viewport width is 1200 pixels or less
          drawLineWithLogo.to(verticalLine,{duration: 0.2, height: 47,ease: 'power3.inOut'});
        } else {
          // Code to execute when viewport width is more than 1200 pixels
          drawLineWithLogo.to(verticalLine,{duration: 0.3, height: 90,ease: 'power3.inOut'});
        }
        drawLineWithLogo.to(logo,{duration: 0.5, opacity: 1,ease: 'power2.inOut'});  
        drawLineWithLogo.to(verticalLine2,{duration: 0.3, height: '80%'});
      }

      // Initial call to handle the viewport size on page load
      handleViewportChange(mediaQuery);

      // Event listener for changes in viewport size
      mediaQuery.addListener(handleViewportChange);


      