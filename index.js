document.addEventListener("DOMContentLoaded", () => {
    const text = "Exploring the intersection of Data Science and Artificial Intelligence to drive innovation.";
    const heroText = document.querySelector(".typewriter");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroText.textContent += text[index];
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});