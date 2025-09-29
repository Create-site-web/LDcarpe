const productsContainer = document.getElementById("products");
const adminPanel = document.getElementById("adminPanel");
const form = document.getElementById("productForm");
const clearBtn = document.getElementById("clearProducts");

const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const orderEmailBtn = document.getElementById("orderEmail");
const cartCount = document.getElementById("cartCount");

const ADMIN_PASSWORD = "yoyo123"; // mot de passe admin
let adminUnlocked = false;

let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = [];

// --- UTILITAIRE POUR CHAMPS MULTIPLES ---
const getValues = id => {
  return document.getElementById(id).value
           .split(",")
           .map(x => x.trim())
           .filter(Boolean);
}

// --- RENDU DES PRODUITS ---
function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = p.image;

    const title = document.createElement("h3");
    title.textContent = p.name;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const price = document.createElement("p");
    price.textContent = `Prix : ${p.price.toFixed(2).replace(".", ",")} €`;

    // Sélecteurs
    const selects = [];
    if (p.colors.length) {
      const sel = document.createElement("select");
      p.colors.forEach(c => {
        const opt = document.createElement("option");
        opt.textContent = c;
        sel.appendChild(opt);
      });
      selects.push({ type: "Couleur", sel });
      card.appendChild(sel);
    }

    if (p.weights.length) {
      const sel = document.createElement("select");
      p.weights.forEach(w => {
        const opt = document.createElement("option");
        opt.textContent = w;
        sel.appendChild(opt);
      });
      selects.push({ type: "Poids", sel });
      card.appendChild(sel);
    }

    if (p.quantities.length) {
      const sel = document.createElement("select");
      p.quantities.forEach(q => {
        const opt = document.createElement("option");
        opt.textContent = q;
        sel.appendChild(opt);
      });
      selects.push({ type: "Nombre", sel });
      card.appendChild(sel);
    }

    if (p.aspects.length) {
      const sel = document.createElement("select");
      p.aspects.forEach(a => {
        const opt = document.createElement("option");
        opt.textContent = a;
        sel.appendChild(opt);
      });
      selects.push({ type: "Aspect", sel });
      card.appendChild(sel);
    }

    const btn = document.createElement("button");
    btn.textContent = "Ajouter au panier";
    btn.addEventListener("click", () => {
      const chosen = selects.map(s => `${s.type}: ${s.sel.value}`).join(", ");
      addToCart({
        name: p.name,
        price: parseFloat(p.price),
        options: chosen
      });
    });
    card.appendChild(btn);

    // Bouton supprimer produit (admin)
    if (adminUnlocked) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌ Supprimer";
      delBtn.className = "danger";
      delBtn.addEventListener("click", () => {
        if (confirm("Supprimer cet article ?")) {
          products.splice(index, 1);
          localStorage.setItem("products", JSON.stringify(products));
          renderProducts();
        }
      });
      card.appendChild(delBtn);
    }

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);

    productsContainer.appendChild(card);
  });
}

// --- AJOUT PRODUIT ---
form.addEventListener("submit", e => {
  e.preventDefault();

  // Prix
  let priceInput = document.getElementById("price").value.replace(",", ".");
  if (isNaN(priceInput) || priceInput === "") {
    alert("Veuillez entrer un prix valide !");
    return;
  }

  const file = document.getElementById("image").files[0];
  if (!file) {
    alert("Veuillez choisir une image !");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const product = {
      name: document.getElementById("name").value.trim(),
      description: document.getElementById("description").value.trim(),
      price: parseFloat(priceInput),
      image: evt.target.result,
      colors: getValues("colors"),
      weights: getValues("weights"),
      quantities: getValues("quantities"),
      aspects: getValues("aspects"),
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    form.reset();
  };

  reader.readAsDataURL(file);
});

// --- SUPPRIMER TOUS LES PRODUITS ---
clearBtn.addEventListener("click", () => {
  if (confirm("Supprimer tous les produits ?")) {
    products = [];
    localStorage.removeItem("products");
    renderProducts();
  }
});

// --- TOGGLE ADMIN AVEC CTRL+Z ---
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "z") {
    if (!adminUnlocked) {
      const pwd = prompt("Entrez le mot de passe admin :");
      if (pwd === ADMIN_PASSWORD) {
        adminUnlocked = true;
        adminPanel.style.display = "block";
        renderProducts(); // pour afficher les boutons supprimer
      } else {
        alert("Mot de passe incorrect !");
      }
    } else {
      adminPanel.style.display = adminPanel.style.display === "block" ? "none" : "block";
    }
  }
});

// --- PANIER ---
function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.options}) - ${item.price.toFixed(2).replace(".", ",")} €`;
    total += item.price;
    cartItems.appendChild(li);
  });

  total += cart.length > 0 ? 1 : 0; // frais fixes
  cartTotal.textContent = cart.length > 0 
    ? `Total (avec 1€ frais) : ${total.toFixed(2).replace(".", ",")} €`
    : "Votre panier est vide";

  cartCount.textContent = cart.length;
}

// Ouvrir/fermer panier
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("hidden");
});

// Commander par email
orderEmailBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  let body = cart.map(item => `${item.name} (${item.options}) - ${item.price.toFixed(2).replace(".", ",")} €`).join("%0D%0A");
  let total = cart.reduce((sum, i) => sum + i.price, 0) + 1;
  body += `%0D%0A---%0D%0ATotal avec frais : ${total.toFixed(2).replace(".", ",")} €`;

  window.location.href = `mailto:?subject=Commande&body=${body}`;
});

// --- INIT ---
renderProducts();
