console.log("login.js is running!")

//__________________________________________________
// NOTE
    // Ce script sert de demo de navigation et sera 
    // supprimé une fois un back-end mis en place

//__________________________________________________
// VARIABLES GLOBALES

    // form.js

//__________________________________________________
// VERIFICATION EMAIL

function confirmEmail() {
    const emailValue = email.value.trim();
    const errorMessage = document.getElementById("error-email");
    // utilisateur test
    const isValid = (emailValue === "demo-admin@ecoride.fr");
    iconDisplay(email, isValid);  //Appeler la fonction de gestion des retours visuels (form.js)

    if (emailValue !== "demo-admin@ecoride.fr") {
        errorMessage.style.display = "block";
    } 
};

//__________________________________________________
// VERIFICATION MOT DE PASSE

function confirmPassword() {
    let passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const errorMessage = document.getElementById("error-password");
    // utilisateur test
    const isValid = (emailValue === "demo-admin@ecoride.fr" && passwordValue.trim() === "ec.206PSW*t"); //vérifier que le mot de passe correspond à l'email
    iconDisplay(password, isValid);  //Appeler la fonction de gestion des retours visuels (form.js)

    //vérifier que le mot de passe correspond à l'email
    if (emailValue !== "demo-admin@ecoride.fr" || passwordValue !== "ec.206PSW*t") {
        errorMessage.style.display = "block"
    } 
};

//__________________________________________________
// MASQUER/AFFICHER MOT DE PASSE

function togglePasswordVisibility() {
    eyePassword.addEventListener('click', () => {
        if (password.type === "password") {
            password.type = "text";
            eyePassword.src = "../img/icons/eye-open-icon-blue.svg";
            eyePassword.title = "Masquer le mot de passe";
        } else {
            password.type = "password";
            eyePassword.src = "../img/icons/eye-slash-icon-grey.svg";
            eyePassword.title = "Afficher le mot de passe";
        }
    });
};
togglePasswordVisibility();

//__________________________________________________
// SOUMISSION FORMULAIRE

// NOTE----------
    // Cette partie du script appartient à la version démo.

function formSubmission() {
    const form = document.getElementById("form");

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //Annuler le comportement de soumission par défaut
        confirmEmail();
        confirmPassword();

        // utilisateur test
        if (email.value.trim() === "demo-admin@ecoride.fr" && password.value.trim() == "ec.206PSW*t") {
            console.log("Visitor has input a demo ID.");
            document.body.style.cursor = 'wait';
            submissionButton.disabled = true
            setTimeout(function() {
                console.log("The visitor has been redirected to the demo page for admins.");
                location.replace("demoAdminUser.html");
                document.body.style.cursor = 'auto';
            }, 1000); //retard de 1s pour permettre à l'utilisateur de voir le feedback avant de changer de page

        } else {
            localStorage.setItem('email', email.value); //permet l'utilisateur de vérifier l'email saisi        
            submissionButton.disabled = false
        }
    });   
};
formSubmission()




