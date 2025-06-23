const panierBtn = document.getElementById("panier-btn");
const panierOnglet = document.getElementById("panier-onglet");
const listeArticles = document.getElementById("liste-articles");
const commandeBtn = document.getElementById("commande-btn");

// Exemple de panier
let panier = [
  { nom: "Article 1", quantite: 1 },
  { nom: "Article 2", quantite: 2 },
];

// Toggle (afficher / cacher) l'onglet panier
panierBtn.addEventListener("click", () => {
  panierOnglet.classList.toggle("cache");
  afficherArticles();
});

// Affiche les articles dans l'onglet
function afficherArticles() {
  listeArticles.innerHTML = "";
  panier.forEach(article => {
    const li = document.createElement("li");
    li.textContent = `${article.nom} x${article.quantite}`;
    listeArticles.appendChild(li);
  });
}

// Action sur le bouton "Passer commande"
commandeBtn.addEventListener("click", () => {
  alert("Commande envoyée !");
  panier = []; // Vide le panier
  afficherArticles(); // Met à jour l'affichage
});