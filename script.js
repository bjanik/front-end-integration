const signUp = document.querySelector("#signon");
const modal = document.querySelector(".modal");
const closeCross = document.querySelector(".close-modal");
const go = document.querySelector("#go");
const form = document.querySelector(".form");
const submitMessage = document.querySelector(".submitmessage");
const closeButton = document.querySelector("#closeButton");


const closeModal = () => {
    modal.style.display = 'none';
    form.style.display = 'flex';
    submitMessage.style.display = 'none';
}

signUp.addEventListener('click', () => {
    modal.style.display = 'block';
})


go.addEventListener('click', () => {
    form.style.display = 'none';
    submitMessage.style.display = 'block';
})

closeCross.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal);