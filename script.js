window.addEventListener('load', function() {
    const dots = document.querySelectorAll('.dot');
    const mainContent = document.getElementById('main-content');
    const preloader = document.getElementById('preloader');

    const timeline = gsap.timeline();

   
    timeline.to({}, { duration: 1 });

   
    timeline.to(dots, {
        y: -80,
        opacity: 1,
        duration: 0.5,
        stagger: 0.4,
        ease: "elastic.out(1, 0.4)",
        repeat: 1,
        yoyo: true,
    });

  
    timeline.to(dots, {
        scale: 110,
        duration: 0.2,
        stagger: 0.1,
        ease: "elastic.out(1, 0.3)",
    });

 
    timeline.to(preloader, {
        height: 0,
        duration: 0.8,
        ease: "power1.out",
        onComplete: function() {
            preloader.style.display = 'none';
            document.body.style.backgroundColor = '#ffffff';  
            document.body.style.color = '#000000';  
            mainContent.style.display = 'block';
        }
    });

     
    timeline.fromTo(mainContent, {
        opacity: 0,
        y: 30,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
    });
});
