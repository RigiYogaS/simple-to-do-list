const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //make regex buat cek format email
    return emailRegex.test(email);
}

function showPopup(name, email) {
    alert(`Terima kasih, ${name}! Pesan kamu telah berhasil dikirim. Kami akan membalas pesanmu melalui email ${email} dalam beberapa hari ke depan. Terima kasih atas feedbacknya, kami sangat menghargainya!`);
}

function validateInput() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email || !validEmail(email)) {
        alert("Harap isi semua data dengan benar dan pastikan email valid!");
        return false;
    }

    showPopup(name, email);
    return true;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateInput(); 
});

form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        validateInput();
    }
});
