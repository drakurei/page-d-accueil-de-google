// =============================================
//  script.js – Menu apps + Recherche
// =============================================

// ---- 1. MENU APPLICATIONS ----
const btnApps = document.getElementById("btnApps");
const appsMenu = document.getElementById("appsMenu");

btnApps.addEventListener("click", function(e) {
    e.stopPropagation();
    appsMenu.classList.toggle("visible");
});

document.addEventListener("click", function() {
    appsMenu.classList.remove("visible");
});


// ---- 2. RECHERCHE GOOGLE ----
const champRecherche = document.getElementById("searchInput");
const boutonRecherche = document.getElementById("btnSearch");
const boutonChance = document.getElementById("btnLucky");

function lancerRecherche() {
    const texte = champRecherche.value.trim();
    if (texte === "") return;
    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(texte),
        "_blank"
    );
}

function jaiDeLaChance() {
    const texte = champRecherche.value.trim();
    if (texte === "") return;
    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(texte) + "&btnI=1",
        "_blank"
    );
}

boutonRecherche.addEventListener("click", lancerRecherche);
boutonChance.addEventListener("click", jaiDeLaChance);

champRecherche.addEventListener("keydown", function(e) {
    if (e.key === "Enter") lancerRecherche();
});