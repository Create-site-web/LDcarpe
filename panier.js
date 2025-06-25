const cartItems = [];

  // Clic sur l'icône panier
  document.getElementById('cart-icon').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
  });

  function sendOrder() {
    if (cartItems.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    let message = "Bonjour, voici ma commande :%0D%0A";
    cartItems.forEach(item => {
      message += `- ${item.nom} : ${item.quantite}%0D%0A`;
    });

    // Mailto (tu peux changer l'adresse)
    window.location.href = `mailto:tonemail@domaine.com?subject=Commande%20LDcarpe&body=${message}`;
  }