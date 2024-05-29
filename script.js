// script.js
window.addEventListener('load', () => {
    const bouquet = document.getElementById('roseBouquet');
    const speechBubble = document.getElementById('speechBubble');
    setTimeout(() => {
        bouquet.style.transform = 'scale(1)'; // Scale to full size
        bouquet.style.opacity = 1; // Become fully opaque
        speechBubble.style.transform = 'scale(1)';
        speechBubble.style.opacity = 1;
    }, 100); // Short delay ensures styles are applied properly
});
