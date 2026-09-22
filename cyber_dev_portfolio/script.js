// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Typewriter Effect for Hero Section
    const textToType = "I am Mustafa. I create immersive web experiences.";
    const typeElement = document.getElementById('typewriter-text');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typeElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Speed of typing in ms
        } else {
            // Optional: Type the cursor blink logic here or remove it if preferred
        }
    }

    // Start typing after a small delay
    setTimeout(typeWriter, 1000);


    // 2. Smooth Scroll for Navigation Links (optional but good)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // 3. Scroll Animation (Elements fade in when they scroll into view)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // Select all cards and text to animate
    const hiddenElements = document.querySelectorAll('.project-card, .section-title');
    hiddenElements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

});
