// Scroll-triggered animations for skill cards
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-category");

    // Configure the Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each skill card
    skillCards.forEach(card => {
        observer.observe(card);
    });
});

// Card flip functionality
document.addEventListener("click", function(e) {
    // Close all cards when clicking outside
    if (!e.target.closest(".skill-category")) {
        document.querySelectorAll(".skill-category").forEach(card => {
            card.classList.remove("is-flipped");
        });
    }
});

// Prevent text selection while flipping
document.querySelectorAll(".skill-category").forEach(card => {
    card.addEventListener("mousedown", (e) => {
        if (e.detail > 1) e.preventDefault();
    });
});