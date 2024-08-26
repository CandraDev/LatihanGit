document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert('Semua field harus diisi!');
            event.preventDefault();
        } else if (!emailPattern.test(email)) {
            alert('Format email tidak valid!');
            event.preventDefault();
        }
    });
});
