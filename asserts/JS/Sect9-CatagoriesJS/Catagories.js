

   // GSAP Animation
   const catagories = document.getElementsByClassName('catagories');


   const CatagoriesTimeline = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".catagories", 
        start: "top center",
        end: "bottom center",
        onEnter: () => {
        CatagoriesTimeline.restart();
        },
        onEnterBack: () => {
        CatagoriesTimeline.restart();
        },
      //  markers: true, 
      }
    }
   );

   CatagoriesTimeline.from(catagories,{duration: 0.5, opacity: 0,ease: "power2.in"});
   CatagoriesTimeline.from(".catagories-column a",{x: -10, duration:0.3,stagger:0.03,ease: "power3.inOut"});