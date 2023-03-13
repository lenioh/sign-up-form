const form = document.querySelector("form");

const passError = document.querySelector("span.pass-error");

form.addEventListener("input", (event) => {
    let password1 = document.getElementById("pass").value;
    let password2 = document.getElementById("pass-again").value;
    passError.textContent = "";
    passError.className = "error";
    if (password1 != password2) {
        passError.textContent = "Passwords do not match";
        passError.className = "error active";
        event.preventDefault();
    } else {
        passError.textContent = "";
        passError.className = "error";
    }
    
})
