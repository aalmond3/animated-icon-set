// ✅ gsap loaded? 
console.log( gsap );

gsap.to(".snail svg", {
    x: 100,        
    duration: 4,  
    repeat: -1,    
    yoyo: true,    
    ease: "power1.inOut"
});

gsap.to(".flower svg", {
    rotation: 5,   
    yoyo: true,    
    repeat: -1,   
    duration: 2,   
    ease: "sine.inOut"
});

function floatLeaf(selector, delay) {
    gsap.fromTo(selector, 
        { 
            x: -100, 
            y: "random(50, 300)", 
            opacity: 0
        }, 
        { 
            x: "100vw", 
            y: "random(50, 300)", 
            rotation: "random(-30, 30)", 
            opacity: 3, 
            duration: 6,
            ease: "sine.inOut",
            repeat: -1, 
            yoyo: false, 
            delay: delay, 
            onComplete: () => {
                gsap.set(selector, { x: -100, y: "random(50, 300)", opacity: 0 }); 
            }
        }
    );
}

floatLeaf(".leaf1", 0);
floatLeaf(".leaf2", 2);