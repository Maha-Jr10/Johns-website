const scriptURL = 'https://script.google.com/macros/s/AKfycbzylcp9uKSP6C_bBPWNQdLysi4ONM_E6JmCs9K37k4M79QpkgMktucTgoTWUIgrIdg6/exec'; // Replace with your actual Google Apps Script URL
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.style.display = "inline-block";
    msg.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message sent successfully!";
                setTimeout(function(){
                    msg.innerHTML = "";
                    msg.style.display = "none";
                }, 5000);
                form.reset();
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = `Error: ${error.message}`;
            setTimeout(function(){
                msg.innerHTML = "";
                msg.style.display = "none";
            }, 4000);
        });
});
