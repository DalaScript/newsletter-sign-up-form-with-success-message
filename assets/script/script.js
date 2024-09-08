const toSubmitCnt = document.getElementById("newsletter__to-submit-container");
const emailRequired = document.getElementById("newsletter__email-required");
const emailInput = document.getElementById("newsletter__email-input");
const submitBtn = document.getElementById("newsletter__submit-btn");

const submitedCnt = document.getElementById("newsletter__submited-container");
const userEmail = document.getElementById("newsletter__user-email");
const dismissBtn = document.getElementById("newsletter__dismiss-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!emailInput.checkValidity() ||
       emailInput.value === '') {
        emailRequired.classList.add("newsletter__email-required--active");
        emailInput.classList.add("newsletter__email-input--invalid");
    }else {
        emailRequired.classList.remove("newsletter__email-required--remove");
        const userInput = emailInput.value;
        userEmail.innerText = userInput;
        emailInput.value = '';
        toSubmitCnt.classList.add("newsletter__to-submit-container--hide");
        submitedCnt.classList.add("newsletter__submited-container--active");
    }
});

dismissBtn.addEventListener("click", (e) => {
    toSubmitCnt.classList.remove("newsletter__to-submit-container--hide");
    submitedCnt.classList.remove("newsletter__submited-container--active");
});