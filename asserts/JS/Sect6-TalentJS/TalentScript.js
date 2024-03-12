

   // GSAP Animation\\
   const TalentverticalLine = document.getElementById('Talent-vertical-line');
   const TalentserticalLine2 = document.getElementById('Talent-vertical-line2');
   const Talentlogo = document.getElementById('Talent-imglogo');
   
   const drawTalentText = gsap.timeline({
    scrollTrigger: {
      trigger: ".talent-section",
      start: "top-=500", 
      end: "bottom-=200",
     // markers: true,
    }
   });

   const TalentdrawLineWithLogo = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".talent-section",
        start: "top-=500", 
        end: "bottom-=200",
       // markers: true,
      }
    }
   );

     // Animation for text 
     drawTalentText.from("#talent-main-wrapper-id div",{opacity:0,duration:0.4,stagger:0.05,ease:"power1.inOut"});

     
     // Define the media query
     const TalentmediaQuery = window.matchMedia("(max-width: 1200px)");

     // Function to handle changes in viewport size
     function handleViewportChange(event) {
       if (event.matches) {
         // Code to execute when viewport width is 1200 pixels or less
         TalentdrawLineWithLogo.to(TalentverticalLine,{duration: 0.1, height: 30,ease: 'power3.inOut'});
         TalentdrawLineWithLogo.to(Talentlogo,{duration: 0.8, opacity: 1,ease: 'power2.inOut'});  
         TalentdrawLineWithLogo.to(TalentserticalLine2,{duration: 0.2, height: '80%'})
       } else {
         // Code to execute when viewport width is more than 1200 pixels
         TalentdrawLineWithLogo.to(TalentverticalLine,{duration: 0.1, height: 85,ease: 'power3.inOut'});
         TalentdrawLineWithLogo.to(Talentlogo,{duration: 0.8, opacity: 1,ease: 'power2.inOut'});  
         TalentdrawLineWithLogo.to(TalentserticalLine2,{duration: 0.2, height: '80%'});
       }
    
  
     }

     // Initial call to handle the viewport size on page load
     handleViewportChange(TalentmediaQuery);

     // Event listener for changes in viewport size
     TalentmediaQuery.addListener(handleViewportChange);


     