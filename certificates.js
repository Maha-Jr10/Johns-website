const modal = document.getElementById('certificate-modal');
const modalImagesContainer = document.getElementById('modal-images-container');
const closeModalButton = document.querySelector('.modal-close');

// Certificate cards (image modal)
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent modal if a link was clicked
        if (e.target.closest('a')) return;

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

// Achievement cards (PDF modal, support for multiple CVs)
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent modal if a link was clicked
        if (e.target.closest('a')) return;

        const documentSrc = card.getAttribute('data-document');
        // If multiple documents (comma separated), show all as iframes
        const srcArray = documentSrc.split(',');

        modalImagesContainer.innerHTML = '';

        srcArray.forEach(src => {
            const trimmedSrc = src.trim();
            if (trimmedSrc.toLowerCase().endsWith('.pdf')) {
                const iframe = document.createElement('iframe');
                iframe.src = trimmedSrc;
                iframe.style.width = '100%';
                iframe.style.height = '80vh';
                iframe.frameBorder = '0';
                modalImagesContainer.appendChild(iframe);
            }
        });

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

document.getElementById('cert-filter').addEventListener('change', function () {
    const value = this.value;
    document.querySelectorAll('.certificate-card').forEach(card => {
        let show = false;
        if (value === 'all') {
            show = true;
        } else if (value === 'kaggle' && card.innerHTML.toLowerCase().includes('kaggle')) {
            show = true;
        } else if (value === 'hackerrank' && card.innerHTML.toLowerCase().includes('hackerrank')) {
            show = true;
        } else if (value === 'oracle' && card.innerHTML.toLowerCase().includes('oracle')) {
            show = true;
        } else if (value === 'freecodecamp' && card.innerHTML.toLowerCase().includes('freecodecamp')) {
            show = true;
        } else if (value === 'datacamp' && card.innerHTML.toLowerCase().includes('datacamp')) {
            show = true;
        }
        card.style.display = show ? '' : 'none';
    });
});