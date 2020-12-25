// COVER-MODAL

let modal = document.querySelector(".cover-modal");

function showCoverModal() {
    modal.classList.add("cover-modal-active");
};

let coverCircleBtn = document.querySelector(".cover-container-circle");

coverCircleBtn.addEventListener("click", showCoverModal);

let closeBtn = document.querySelector(".to-close-btn");

function hideCoverModal() {
    modal.classList.remove("cover-modal-active");
};

closeBtn.addEventListener("click", hideCoverModal);


modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        hideCoverModal();
    };
});

window.setTimeout(showCoverModal, 30000);


// register-modal

let registerModal = document.querySelector(".register-modal");
console.log(registerModal);

let registerBtn = document.querySelectorAll(".to-register-btn");
console.log(registerBtn);

function showRegisterModal() {
    registerModal.classList.add("register-modal-active");
    hideSignInModal();
};

function hideRegisterModal() {
    registerModal.classList.remove("register-modal-active");
};

registerBtn.forEach((btn) => {
    btn.addEventListener("click", showRegisterModal);
});
registerBtn.forEach((btn) => {
    btn.addEventListener("click", hideCoverModal);
});

let closeRegisterBtn = document.querySelector(".to-close-register-btn");

closeRegisterBtn.addEventListener("click", hideRegisterModal);

let registerMenuBtn = document.querySelectorAll(".reg-btn");
console.log(registerMenuBtn);

registerMenuBtn.forEach(btn => {
    btn.addEventListener("click", showRegisterModal);
})

// SIGN-IN
let signInModal = document.querySelector(".sign-in-modal");
let closeSignInModalBtn = document.querySelector(".to-close-sign-in-btn");
let signInMenuBtn = document.querySelector(".sign-btn");

function showSignInModal() {
    signInModal.classList.add("sign-in-modal-active");
    hideRegisterModal();
};

function hideSignInModal() {
    signInModal.classList.remove("sign-in-modal-active");
};

signInMenuBtn.addEventListener("click", showSignInModal);

closeSignInModalBtn.addEventListener("click", hideSignInModal);



