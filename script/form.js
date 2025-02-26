console.log("form.js is running!")

//__________________________________________________
// VARIABLES GLOBALES

// inputs
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirmation");
const submissionButton = document.getElementById("submit");
// icon oeil
let eyePassword = document.getElementById("eyeIconPassword");
let eyePasswordConfirm = document.getElementById("eyeIconPswConfirmation");
// expressions régulières
const nameRegex = /^(?=(.*[a-zA-ZÀ-ÿ].*){2})[A-Za-zÀ-ÿ\s-]+$/; //accepte lettres minuscules, majuscules, accentuées, espace et tirets. Minimum 2 lettres alphabetique.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //doit contenir au moins un caractère, suivit d'un @, suivit d'au moins un caractère, suivit d'un point (.), suivit d'au moins 2 lettres.
const passwordRegex = /^(?=(.*[a-zà-ÿœ]))(?=(.*[A-ZÀ-ÖØ-ÝŸ]))(?=(.*[0-9]))(?=(.*[;:!@#$%^&*(),.?{}°§£":'`~{}|<>+=[\]\\/]))[a-zà-ÿœA-ZÀ-ÖØ-ÝŸ0-9;:!@#$%^&*(),.?{}°§£":'_-`~{}|<>+=[\]\\/]{9,}$/; // minimum 9 caractères, 1 minuscule, 1 majuscule, 1 chiffre, 1 symbole

//__________________________________________________
// RETOURS VISUELS (couleur, icon) SAISIES UTILISATEUR

function iconDisplay(field, isValid) {
    let icon = field.closest('.form-element').querySelector('.js-display'); // Sélectionner l'icône associée

    if (!isValid) {
        field.classList.remove("valid");
        field.classList.add("invalid");
        icon.style.display = "block"; //afficher l'icone rouge
        icon.src = "../img/pictures/cross-icon-red.svg"; //afficher l'icone rouge
    } else {
        field.classList.remove("invalid");
        field.classList.add("valid");
        icon.src = "../img/pictures/check-icon-green.svg"; //afficher l'icone vert
        icon.style.display = "block"; //afficher l'icone vert
    };
};

