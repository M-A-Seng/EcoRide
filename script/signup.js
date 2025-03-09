console.log("signup.js is running!")

//__________________________________________________
// VARIABLES GLOBALES

    // form.js

//__________________________________________________
// VERIFICATION CHAMPS DE NOM

function nameVerification(field) {
    const fieldValue = field.value
    const twoLetterRegex = /^(?=(.*[a-zA-ZÀ-ÿ].*){2,})/;
    let note = field.closest('.form-element').querySelector('.note'); // Sélectionner le message associé

    const isValidName = !(fieldValue.length < 2 || fieldValue.length > 50 || !nameRegex.test(fieldValue));
    iconDisplay(field, isValidName); //Appeler la fonction de gestion des retours visuels (form.js)

    if (!twoLetterRegex.test(fieldValue)) {
        note.innerHTML = "Saisissez au moins 2 lettres"
        note.style.display = "block"; //afficher le message sous le champ
    } else if (!nameRegex.test(fieldValue)) {
        note.innerHTML = "Seuls les lettres, les espaces et les tirets (-) sont acceptés."
        note.style.display = "block"; //afficher le message sous le champ
    } else {
        note.style.display = "none"; }
};

// Surveiller les inputs individuellement
document.querySelectorAll(".name-input").forEach(function(input) {
    input.addEventListener('change', function() {
        nameVerification(input); // Appeler la fonction de validation
    });
}); 

//__________________________________________________
// VERIFICATION EMAIL

function emailVerification() {
    const note = document.getElementById("note-email");
    const emailValue = email.value;
    // expression régulière pour verification email
    const isValidEmail = (emailValue.length > 7 && emailValue.length < 150 && emailRegex.test(emailValue));
    iconDisplay(email, isValidEmail); //Appeler la fonction de gestion des retours visuels (form.js)

    if (!emailRegex.test(emailValue)) {
        note.innerHTML = '<span style="color:red;">Adresse email invalide</span>'
    } else {
        note.innerHTML = ''
    }
};

// Surveiller l'interaction avec le champ
document.getElementById("email").addEventListener('change', emailVerification);

//__________________________________________________
// VERIFICATION MOT DE PASSE

function passwordChecker() {
    let passwordValue = password.value
    
    //minimum 9 caractères, 1 minuscule, 1 majuscule, 1 chiffre, 1 symbole (les lettres accentuées sont acceptées)
    const isValidPassword = (passwordValue.length > 9 && passwordValue.length < 50 && passwordRegex.test(passwordValue));

    iconDisplay(password, isValidPassword); //Appeler la fonction de gestion des retours visuels (form.js)
};

function passwordConfirmation() {
    const isValidConfirmation = password.value === passwordConfirm.value;
    iconDisplay(passwordConfirm, isValidConfirmation); //Appeler la fonction de gestion des retours visuels (form.js)
};

function passwordFeedback() {
    const lowercaseFeedback = document.querySelector(".lowercaseFeedback"); //p
    const lowercaseCheck = document.querySelector(".js-lowercaseCheck"); //span
    const uppercaseFeedback = document.querySelector(".uppercaseFeedback"); //p
    const uppercaseCheck = document.querySelector(".js-uppercaseCheck"); //span
    const numberFeedback = document.querySelector(".numberFeedback"); //p
    const numberCheck = document.querySelector(".js-numberCheck"); //span
    const symbolFeedback = document.querySelector(".symbolFeedback"); //p
    const symbolCheck = document.querySelector(".js-symbolCheck"); //span
    const minLengthFeedback = document.querySelector(".minLengthFeedback"); //p
    const minLengthCheck = document.querySelector(".js-minLengthCheck"); //span

    // expressions regulières
    const lowercaseRegex = /[a-zà-ÿœ]/; //Uniquement les charactère codes minuscule comprenant les accentués français
    const uppercaseRegex = /[A-ZÀ-ÖØ-ÝŸ]/; //Uniquement les charactère codes majuscule comprenant les accentués français
    const numbersRegex = /[0-9]/; //chiffre
    const symbolsRegex = /[;:!@#$%^&*(),.?{}°§£":'`~{}|<>+=[\]\\/]/; // Caractères spéciaux
    const minLengthRegex = /^.{10,}$/; //minimum 9 caractères

    // feedback pour lettre minuscule
    if (lowercaseRegex.test(password.value)) {
        lowercaseFeedback.style.color = "green";
        lowercaseCheck.innerHTML = "&#10004;"; //Symbole check
    } else {
        lowercaseFeedback.style.color = "red";
        lowercaseCheck.innerHTML = "&#10006;"; //symbole croix
    }
    // feedback lettre majuscule
    if (uppercaseRegex.test(password.value)) {
        uppercaseFeedback.style.color = "green";
        uppercaseCheck.innerHTML = "&#10004;";  //Symbole check
    } else {
        uppercaseFeedback.style.color = "red";
        uppercaseCheck.innerHTML = "&#10006;"; //symbole croix
    }
    // feedback chiffre
    if (numbersRegex.test(password.value)) {
        numberFeedback.style.color = "green";
        numberCheck.innerHTML = "&#10004;"; //Symbole check
    } else {
        numberFeedback.style.color = "red";
        numberCheck.innerHTML = "&#10006;"; //symbole croix
    }
    // feedback symbole
    if (symbolsRegex.test(password.value)) {
        symbolFeedback.style.color = "green";
        symbolCheck.innerHTML = "&#10004;"; //Symbole check
    } else {
        symbolFeedback.style.color = "red";
        symbolCheck.innerHTML = "&#10006;"; //symbole croix
    }
    // feedback nombre de caractères
    if (minLengthRegex.test(password.value)) {
        minLengthFeedback.style.color = "green";
        minLengthCheck.innerHTML = "&#10004;"; //Symbole check
    } else {
        minLengthFeedback.style.color = "red";
        minLengthCheck.innerHTML = "&#10006;"; //symbole croix
    }
}

// Surveiller les champs mot de passe
document.getElementById("password").addEventListener('input', passwordChecker); //password input
document.getElementById("password").addEventListener('input', passwordFeedback); //text feedback
document.getElementById("passwordConfirmation").addEventListener('input', passwordConfirmation); //second password input

//__________________________________________________
// MASQUER/AFFICHER MOT DE PASSE

function togglePasswordVisibility() {
    // Champ mot de passe
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
    // Champ confirmer mot de passe
    eyePasswordConfirm.addEventListener('click', () => {
        if (passwordConfirm.type === "password") {
            passwordConfirm.type = "text";
            eyePasswordConfirm.src = "../img/icons/eye-open-icon-blue.svg";
            eyePasswordConfirm.title = "Masquer le mot de passe";
        } else {
            passwordConfirm.type = "password";
            eyePasswordConfirm.src = "../img/icons/eye-slash-icon-grey.svg";
            eyePasswordConfirm.title = "'Afficher le mot de passe";
        }
    });
};
togglePasswordVisibility();

//__________________________________________________
// ACTIVER BOUTON SOUMISSION

function enableSubmissionButton() {
    if ( //Vérifie que tous les champs sont correctement remplie
        firstName.value.length > 2 && firstName.value.length < 50 && nameRegex.test(firstName.value)
        && email.value.length > 7 && email.value.length < 150 && emailRegex.test(email.value)
        && passwordRegex.test(password.value)
        && password.value === passwordConfirm.value
    ) {
        submissionButton.disabled = false; //activer le bouton
    } else {
        submissionButton.disabled = true; //désactiver le bouton
    };
};
enableSubmissionButton();
lastName.addEventListener('input', enableSubmissionButton);
firstName.addEventListener('input', enableSubmissionButton);
email.addEventListener('input', enableSubmissionButton);
password.addEventListener('input', enableSubmissionButton);
passwordConfirm.addEventListener('input', enableSubmissionButton);

//__________________________________________________
// SOUMISSION FORMULAIRE

function formSubmission() {
    const form = document.getElementById("form");

    //Annuler la fonction de soumission par défaut
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.reset();
        location.reload(); // Recharge la page
        console.log("No account created, but form submitted successfully! \n Form data has been deleted")
    });
};
formSubmission()

