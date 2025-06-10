document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const msg = document.createElement('div');
    msg.className = 'msg';
    form.appendChild(msg);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                msg.textContent = "Message sent successfully!";
                msg.style.display = "block";
                msg.style.backgroundColor = "#eafff5";
                msg.style.color = "#009e60";
                form.reset();
                setTimeout(() => {
                    msg.style.display = "none";
                }, 3000);
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || "Failed to send message. Please try again.");
                });
            }
        })
        .catch(error => {
            msg.textContent = error.message || "Failed to send message. Please try again.";
            msg.style.display = "block";
            msg.style.backgroundColor = "#ffeaea";
            msg.style.color = "#d32f2f";
        });
    });
});