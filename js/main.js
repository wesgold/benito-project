// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('CTA button clicked!');
            // Add your custom functionality here
            alert('Welcome! This is where your action begins.');
        });
    }

    // Optional: Add fade-in animation on load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
