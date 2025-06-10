// Scroll-triggered animations for skill cards
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-category");

    // Intersection Observer for card animation
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

    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Card flip on click
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            this.classList.toggle('flipped');
        });
    });

    // Skills filter logic (default: programming-language)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const skill = this.getAttribute('data-skill');
            document.querySelectorAll('.skills-summary-list li').forEach(li => {
                if (li.getAttribute('data-skill') === skill) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            });
        });
    });

    // Set default filter to programming-language on load
    const defaultSkill = "programming-language";
    document.querySelectorAll('.skills-summary-list li').forEach(li => {
        if (li.getAttribute('data-skill') === defaultSkill) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-skill') === defaultSkill) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Prevent text selection while flipping
    document.querySelectorAll(".skill-category").forEach(card => {
        card.addEventListener("mousedown", (e) => {
            if (e.detail > 1) e.preventDefault();
        });
    });
});