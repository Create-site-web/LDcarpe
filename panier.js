let panier = [];

// Ajouter au panier
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const size = this.dataset.size;
        const price = this.dataset.price;

        panier.push({ size, price });

        alert("Autocollant " + size + " ajouté au panier !");
    });
});

// Commander
document.getElementById("cmdcollant").addEventListener("click", function () {

    if (panier.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let message = "Bonjour, je souhaite commander :\n\n";

    let total = 0;

    panier.forEach(item => {
        message += "- Autocollant taille " + item.size + " : " + item.price + "€\n";
        total += parseFloat(item.price);
    });

    message += "\nTotal : " + total + "€";

    // ⚠️ Remplace par TON email
    let email = "ldcarpepro@gmail.com";

    window.location.href = `mailto:${email}?subject=Commande Autocollants LDcarp&body=${encodeURIComponent(message)}`;
});