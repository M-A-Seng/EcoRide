console.log("modo.js is running!");

//__________________________________________________
// VARIABLES GLOBALES

//__________________________________________________
// BASCULER EN MODE MODERATION

function askForModerationMode() {
    let result = confirm("Vous êtes sur le point de basculer à l'interface de modération. Voulez-vous continuer ?");

    if (result) {
        console.log("The user has been redirected to the (demo) moderation page.");
        location.replace("demoModeration.html");
    }
}
document.querySelectorAll(".askModoMode").forEach(function(target) {
    target.addEventListener('click', function() {
        askForModerationMode();
    });
});

//__________________________________________________
// BASCULER EN MODE UTILISATEUR

function askForUserMode() {
    let result = confirm("Vous êtes sur le point de retourner à votre espace utilisateur. Voulez-vous continuer ?");

    if (result) {
        console.log("The user has been redirected to the demo page for admins.");
        location.replace("demoAdminUser.html");
    }
}
document.querySelectorAll(".askUserMode").forEach(function(target) {
    target.addEventListener('click', function() {
        askForUserMode();
    });
});
