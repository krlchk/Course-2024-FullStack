const but = document.getElementById("but");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

but.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'flex';
}

function closeModal(event) {
    if (event.target === closeBtn) {
        document.body.style.overflow = 'auto';
        modal.style.display = 'none';
    }
}
