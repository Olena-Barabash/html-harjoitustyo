const password = document.querySelector("#salasana");
const confirmation = document.querySelector("#vahvista-salasana");

password.addEventListener("input", () => {
    confirmation.disabled = !password.checkValidity();

    if (confirmation.disabled) {
        confirmation.value = "";
    }
});