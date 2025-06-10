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

document.getElementById('downloadCvBtn').onclick = function() {
    document.getElementById('cvModal').style.display = 'flex';
};
document.getElementById('closeCvModal').onclick = function() {
    document.getElementById('cvModal').style.display = 'none';
};
window.onclick = function(event) {
    var modal = document.getElementById('cvModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};