// Main JavaScript - Cave Explorer with 16-bit Pokemon
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const pokemonSprites = document.querySelectorAll('.pokemon-sprite');
    const neonLights = document.querySelectorAll('.neon-light');

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

    // Pokemon walking behavior
    const spriteData = [];
    pokemonSprites.forEach((sprite, index) => {
        const data = {
            element: sprite,
            x: parseFloat(sprite.style.left || getComputedStyle(sprite).left),
            y: parseFloat(sprite.style.top || getComputedStyle(sprite).top),
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            isPaused: false,
            walkCycle: 0
        };
        spriteData.push(data);

        // Walking animation
        sprite.style.animation = `walk ${0.6 + Math.random() * 0.4}s steps(2) infinite`;

        // Pause on hover
        sprite.addEventListener('mouseenter', () => {
            data.isPaused = true;
            sprite.style.animationPlayState = 'paused';
        });

        sprite.addEventListener('mouseleave', () => {
            data.isPaused = false;
            sprite.style.animationPlayState = 'running';
        });
    });

    // Animate sprites walking around
    function animateSprites() {
        spriteData.forEach((data) => {
            if (data.isPaused) return;

            // Update position
            data.x += data.speedX;
            data.y += data.speedY;

            // Boundary detection and bounce
            const bounds = data.element.getBoundingClientRect();
            if (data.x <= 0 || data.x >= window.innerWidth - bounds.width) {
                data.speedX *= -1;
            }
            if (data.y <= 0 || data.y >= window.innerHeight - bounds.height) {
                data.speedY *= -1;
            }

            // Apply position (use transform for better performance)
            data.element.style.left = data.x + 'px';
            data.element.style.top = data.y + 'px';
        });

        requestAnimationFrame(animateSprites);
    }
    animateSprites();

    // Dynamic neon light flickering
    neonLights.forEach((light, index) => {
        setInterval(() => {
            if (Math.random() > 0.85) {
                light.style.opacity = Math.random() * 0.5 + 0.3;
                setTimeout(() => {
                    light.style.opacity = '';
                }, 150);
            }
        }, 2000 + index * 500);
    });

    // Enhanced parallax effect on mouse move
    let mouseX = 0.5;
    let mouseY = 0.5;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        // Move neon lights slightly with mouse
        neonLights.forEach((light, index) => {
            const speed = (index + 1) * 5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            light.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Glitch effect on title
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

    // Ambient cave lighting effect
    const caveBackground = document.querySelector('.cave-background');
    if (caveBackground) {
        setInterval(() => {
            const randomOpacity = 0.95 + Math.random() * 0.05;
            caveBackground.style.opacity = randomOpacity;
        }, 3000);
    }
});
