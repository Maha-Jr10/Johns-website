const scriptURL = 'https://script.google.com/macros/s/AKfycbzylcp9uKSP6C_bBPWNQdLysi4ONM_E6JmCs9K37k4M79QpkgMktucTgoTWUIgrIdg6/exec'; // Replace with your actual Google Apps Script URL
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Ensure the message div is always directly below the form
if (form && msg && form.nextElementSibling !== msg) {
    form.parentNode.insertBefore(msg, form.nextElementSibling);
}

function showMsg(text, type = "info", duration = 3500) {
    msg.className = "msg " + type;
    msg.style.display = "inline-block";
    msg.innerHTML = text;

    if (type === "error") {
        msg.style.backgroundColor = "#ffeaea";
        msg.style.color = "#d63031";
    } else if (type === "success") {
        msg.style.backgroundColor = "#eafff5";
        msg.style.color = "#009e60";
    } else {
        msg.style.backgroundColor = "#eafcff";
        msg.style.color = "#232b50";
    }

    setTimeout(() => {
        msg.innerHTML = "";
        msg.style.display = "none";
        msg.style.backgroundColor = "#00fff7";
        msg.style.color = "#232b50";
        msg.style.zIndex = "";
    }, duration);
}

form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form['name'].value.trim();
    const surname = form['surname'].value.trim();
    const email = form['email'].value.trim();
    const comment = form['comment'].value.trim();

    if (!name || !surname || !email || !comment) {
        showMsg("Please fill in all fields.", "error");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMsg("Please enter a valid email address.", "error");
        return;
    }

    showMsg("Sending...", "info", 8000);

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        if (response.ok) {
            showMsg("✅ Message sent successfully!", "success", 5000);
            form.reset();
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error!', error.message);
        showMsg(`❌ Error: ${error.message}`, "error", 5000);
    }
});
