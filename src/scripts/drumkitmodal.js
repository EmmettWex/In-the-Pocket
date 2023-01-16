const opener = document.getElementById("open");

const drum_modal = document.getElementsByClassName("drum-modal");

const close = document.getElementsById("close");

button.addEventListener('click', () => {
    drum_modal.classList.add('show');
});

close.addEventListener('click', () => {
    drum_modal.classList.remove('show');
});