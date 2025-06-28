const cartItems = [];

  // Clic sur l'icône panier
  document.getElementById('cart-icon').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
  });