console.log("form.js is running!")

// Masquer/Afficher le mot de passe
function showPassword() {
    // Champ mot de passe
    let password = document.getElementById("password");
    let  eyePassword = document.getElementById("eyeIconPassword");
    // Champ confirmer le mot de passe
    let passwordConfirm = document.getElementById("passwordConfirmation");
    let eyePasswordConfirm = document.getElementById("eyeIconPswConfirmation");

    eyePassword.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            eyePassword.src = "../img/pictures/eye-open-icon.svg";
            eyePassword.title = "Masquer le mot de passe";
        } else {
            password.type = "password";
            eyePassword.src = "../img/pictures/eye-slash-icon.svg";
            eyePassword.title = "Afficher le mot de passe"
        }
    });
    eyePasswordConfirm.addEventListener("click", () => {
        if (passwordConfirm.type === "password") {
            passwordConfirm.type = "text";
            eyePasswordConfirm.src = "../img/pictures/eye-open-icon.svg";
            eyePasswordConfirm.title = "Masquer le mot de passe";
        } else {
            passwordConfirm.type = "password";
            eyePasswordConfirm.src = "../img/pictures/eye-slash-icon.svg";
            eyePasswordConfirm.title = "'Afficher le mot de passe";
        }
    })
}
showPassword()


