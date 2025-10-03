// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const pokemonSprites = document.querySelectorAll('.pokemon-sprite');

    // Button functionality
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('CTA button clicked!');
            alert('Welcome! This is where your action begins.');
        });
    }

    // Fade-in animation on load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Pokemon sprite floating animations
    pokemonSprites.forEach((sprite, index) => {
        // Set initial random position offset
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;

        sprite.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        pokemonSprites.forEach((sprite, index) => {
            const speed = (index + 1) * 10;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            sprite.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Add glitch effect to title occasionally
    const title = document.querySelector('header h1');
    if (title) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    title.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }, 100);
    }
});
