console.log("script.js is running!");

//__________________________________________________
// VARIABLES GLOBALES

const covoituragesButton = document.getElementById("mesCovoituragesButton");
const voituresButton = document.getElementById("mesVoituresButton");
const covoituragesSection = document.getElementById("mesCovoiturages");
const voituresSection = document.getElementById("mesVoitures");

//__________________________________________________
// BASCULER SECTION MES COVOITURAGES/MES VOITURES

function toggleSection() {
    covoituragesButton.addEventListener('click', function() {
        covoituragesSection.style.display = "flex";
        voituresSection.style.display = "none";
        covoituragesButton.classList.add("profilSection-active");
        voituresButton.classList.remove("profilSection-active");
    });
    voituresButton.addEventListener('click', function() {
        voituresSection.style.display = "flex";
        covoituragesSection.style.display = "none";
        voituresButton.classList.add("profilSection-active");
        covoituragesButton.classList.remove("profilSection-active");
    });
};
toggleSection();

