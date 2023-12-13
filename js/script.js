let side = document.querySelector(".side-bar");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let over = document.querySelector(".overlay");
open.addEventListener("click", () =>{
    side.style.right = "0";
    over.style.display = "block";
});

close.addEventListener("click", () =>{
    side.style.right = "-100%";
    over.style.display = "none";
});


ScrollReveal({ 
    reset: false,
    distance: "60px",
    duration: 2000,
    delay: 400
});
ScrollReveal().reveal('.nav-list li', { delay: 400, origin:"top", interval: 200 });
ScrollReveal().reveal('.nav-btn button', { delay: 500, origin:"right", interval: 200 });
ScrollReveal().reveal('.logo', { delay: 300, origin:"left" });
ScrollReveal().reveal('.hero-left h1', { delay: 500, origin:"top" });
ScrollReveal().reveal('.hero-left p', { delay: 600, origin:"right" });
ScrollReveal().reveal('.hero-left .btn-hold button', { delay: 700, origin:"bottom", interval: 200 });
ScrollReveal().reveal('.hero-right .hero', { delay: 850, origin:"left" });
ScrollReveal().reveal('.hero-right .heros', { delay: 800, origin:"left" });
ScrollReveal().reveal('.hero-right .hero-2', { delay: 950, origin:"top", distance: '100px' });
ScrollReveal().reveal('.hero-right .hero-3', { delay: 1000, origin:"bottom", distance: '100px' });

ScrollReveal().reveal('.about .about-left img', { delay: 400, origin:"top" , distance: '30px'});
ScrollReveal().reveal('.about .about-right h1', { delay: 600, origin:"bottom" , distance: '30px'});
ScrollReveal().reveal('.about .about-right p', { delay: 800, origin:"left" , distance: '30px'});
ScrollReveal().reveal('.about .about-right button', { delay: 1000, origin:"right" , distance: '30px'});

ScrollReveal().reveal('.features-right img', { delay: 1000, origin:"top" , distance: '50px'});
ScrollReveal().reveal('.features-left .heading1', { delay: 400, origin:"bottom" , distance: '50px'});
ScrollReveal().reveal('.features-left .para', { delay: 600, origin:"bottom" , distance: '50px'});
ScrollReveal().reveal('.features-left button', { delay: 800, origin:"bottom" , distance: '50px'});

ScrollReveal().reveal('.offers .heading', { delay: 400, origin:"top"});
ScrollReveal().reveal('.offers .cards-hold .Cards', { delay: 600, origin:"bottom", interval: 200 });

ScrollReveal().reveal('.projects .heading', { delay: 400, origin:"top"});
ScrollReveal().reveal('.projects .heading2', { delay: 600, origin:"left"});

ScrollReveal().reveal('.projects .images .first .left', { delay: 400, origin:"top"});
ScrollReveal().reveal('.projects .images .first .right', { delay: 500, origin:"right"});

ScrollReveal().reveal('.projects .images .second .left', { delay: 400, origin:"left"});
ScrollReveal().reveal('.projects .images .second .right', { delay: 500, origin:"top"});

ScrollReveal().reveal('.reviews .heading', { delay: 400, origin:"top"});
ScrollReveal().reveal('.reviews .our', { delay: 550, origin:"bottom"});

ScrollReveal().reveal('.review-card .person .im', {  delay: 400, origin:"left"});
ScrollReveal().reveal('.review-card .conny p', { delay: 400, origin:"right"});
ScrollReveal().reveal('.review-card .conny h5', { delay: 500, origin:"top"});
ScrollReveal().reveal('.review-card .conny span', { delay: 500, origin:"bottom"});
ScrollReveal().reveal('.review-card .conny .star img', { delay: 500, origin:"bottom", interval: 100});
ScrollReveal().reveal('.links-hold ul', { delay: 500, origin:"bottom", interval: 100});
ScrollReveal().reveal('.links-hold .right', { delay: 500, origin:"right", interval: 100});