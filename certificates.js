const modal = document.getElementById('certificate-modal');
const modalImagesContainer = document.getElementById('modal-images-container');
const closeModalButton = document.querySelector('.modal-close');

document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', () => {
        const certificateSrc = card.getAttribute('data-certificate');
        const srcArray = certificateSrc.split(',');

        modalImagesContainer.innerHTML = '';

        srcArray.forEach(src => {
            const img = document.createElement('img');
            img.src = src.trim();
            img.alt = "Certificate Image";

            setTimeout(() => {
                img.classList.add('show');
            }, 50);

            modalImagesContainer.appendChild(img);
        });

        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => {
        const documentSrc = card.getAttribute('data-document');
        
        // Create an iframe for PDF or other document viewing
        const iframe = document.createElement('iframe');
        iframe.src = documentSrc;
        iframe.style.width = '100%';
        iframe.style.height = '80vh';
        iframe.frameBorder = '0';
        
        modalImagesContainer.innerHTML = '';
        modalImagesContainer.appendChild(iframe);

        modal.style.display = 'flex';
    });
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    const images = modal.querySelectorAll('img');
    images.forEach(img => img.classList.remove('show'));
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        const images = modal.querySelectorAll('img');
        images.forEach(img => img.classList.remove('show'));
    }
});