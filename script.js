// Create twinkling stars in the background
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "tiny-star";
        // Random positioning
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        // Add twinkling animation
        star.style.animation = `twinkling ${Math.random() * 2 + 1}s infinite`;
        document.body.appendChild(star);
    }
}

createStars();

