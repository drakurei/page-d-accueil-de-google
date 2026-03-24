// ================================================================
//  script.js — Logique de la page Google × Penthouse
//  Niveau : débutant avancé
//
//  Ce fichier gère :
//  1. Le menu des applications (ouverture/fermeture avec animation)
//  2. La recherche Google
// ================================================================


// ================================================================
//  SÉLECTION DES ÉLÉMENTS DU DOM
//
//  Le DOM (Document Object Model) c'est la représentation de ton
//  HTML sous forme d'objets que JavaScript peut manipuler.
//
//  On "sélectionne" des éléments HTML avec :
//  - document.getElementById("id")      → par attribut id=""
//  - document.querySelector(".classe")  → par classe CSS
//
//  Bonne pratique : on les stocke dans des constantes "const"
//  car ces références ne changeront jamais.
// ================================================================

const btnApps = document.getElementById("btnApps"); // grille 9 points
const menuApps = document.getElementById("appsMenu"); // popup apps
const champTexte = document.getElementById("champRecherche"); // input de recherche
const btnRecherche = document.getElementById("btnRecherche"); // "Recherche Google"
const btnChance = document.getElementById("btnChance"); // "J'ai de la chance"


// ================================================================
//  MENU DES APPLICATIONS
//
//  Principe :
//  - On ajoute/retire la classe CSS "ouvert" sur le menu.
//  - Le CSS gère l'animation (opacity + transform) via transition.
//  - C'est le pattern moderne : JS change les classes, CSS anime.
//
//  classList.toggle("ouvert") :
//    → si "ouvert" absent  : l'ajoute   (menu s'ouvre)
//    → si "ouvert" présent : le retire  (menu se ferme)
// ================================================================

btnApps.addEventListener("click", function(evenement) {

    // stopPropagation empêche ce clic de "remonter" vers document.
    // Sans ça : le listener sur document fermerait le menu
    // immédiatement après l'avoir ouvert.
    evenement.stopPropagation();

    menuApps.classList.toggle("ouvert");
});


// Ferme le menu si on clique n'importe où ailleurs sur la page.
// Ce listener écoute TOUS les clics sur le document entier.
document.addEventListener("click", function() {
    menuApps.classList.remove("ouvert");
});


// ================================================================
//  RECHERCHE GOOGLE
//
//  URL de recherche Google : https://www.google.com/search?q=TEXTE
//  Le paramètre "q" contient le texte recherché.
//
//  encodeURIComponent() encode les caractères spéciaux :
//    "café coréen" → "caf%C3%A9%20cor%C3%A9en"
//  C'est obligatoire pour que l'URL soit valide.
//
//  .trim() supprime les espaces en début et fin de chaîne.
//  Exemple : "  bonjour  " → "bonjour"
// ================================================================

/**
 * Lance une recherche Google avec le texte saisi.
 * window.open(url, "_blank") ouvre dans un nouvel onglet.
 */
function lancerRecherche() {
    const texte = champTexte.value.trim();

    // Garde : on ne fait rien si le champ est vide
    if (texte === "") return;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(texte);
    window.open(url, "_blank");
}

/**
 * "J'ai de la chance" : redirige vers le 1er résultat direct.
 * &btnI=1 est le paramètre Google pour "I'm Feeling Lucky".
 */
function sentirChanceux() {
    const texte = champTexte.value.trim();
    if (texte === "") return;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(texte) + "&btnI=1";
    window.open(url, "_blank");
}


// ================================================================
//  CONNEXION ÉVÉNEMENTS → FONCTIONS
//
//  addEventListener(type, callback) :
//  - type     : le type d'événement ("click", "keydown", etc.)
//  - callback : la fonction à exécuter quand l'événement se produit
// ================================================================

// Clic sur "Recherche Google"
btnRecherche.addEventListener("click", lancerRecherche);

// Clic sur "J'ai de la chance"
btnChance.addEventListener("click", sentirChanceux);

// Touche Entrée dans le champ de recherche
champTexte.addEventListener("keydown", function(evenement) {
    // evenement.key donne le nom de la touche pressée sous forme de string
    if (evenement.key === "Enter") {
        lancerRecherche();
    }
});