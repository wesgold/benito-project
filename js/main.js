// Main JavaScript - Cave Explorer
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

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
