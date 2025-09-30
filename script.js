// --- VARIABLES ---
const productsContainer = document.getElementById("products");
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const orderEmailBtn = document.getElementById("orderEmail");
const cartCount = document.getElementById("cartCount");

let cart = [];

// --- LISTE DES PRODUITS (à modifier avec tes vrais articles) ---
let products = [
  {
    name: "Sondeur",
    description: "",
    price: 1.00,
    image: "boutique plombs/sondeur.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["100"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Branche",
    description: "",
    price: 1.00,
    image: "boutique plombs/Branche.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["85","115"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
];

// --- CALCUL DU PRIX SELON POIDS ---
function getPriceByWeight(weightStr, basePrice) {
  if (!weightStr) return basePrice;
  let grams = parseInt(weightStr.replace(/[^\d]/g, ""));
  if (isNaN(grams)) return basePrice;

  if (grams >= 0 && grams <= 120) return 1.00;
  else if (grams === 140) return 1.20;
  else if (grams === 145) return 1.30;
  else if (grams === 150) return 1.40;
  else if (grams === 170) return 1.50;
  else if (grams === 180) return 1.60;
  else if (grams === 210) return 1.80;
  else if (grams === 230) return 1.90;
  else if (grams === 300) return 2.50;
  else if (grams === 350) return 2.70;
  else return basePrice;
}

// --- RENDU DES PRODUITS ---
function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = p.image;

    const title = document.createElement("h3");
    title.textContent = p.name;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const priceEl = document.createElement("p");
    priceEl.textContent = `Prix : ${p.price.toFixed(2).replace(".", ",")} €`;

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

      sel.addEventListener("change", () => {
        let finalPrice = getPriceByWeight(sel.value, parseFloat(p.price));
        priceEl.textContent = `Prix : ${finalPrice.toFixed(2).replace(".", ",")} €`;
      });
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
      let selectedWeight = selects.find(s => s.type === "Poids")?.sel.value || "";
      let finalPrice = getPriceByWeight(selectedWeight, parseFloat(p.price));

      const chosen = selects.map(s => `${s.type}: ${s.sel.value}`).join(", ");
      addToCart({ name: p.name, price: finalPrice, options: chosen });
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(priceEl);
    card.appendChild(btn);

    productsContainer.appendChild(card);
  });
}

// --- PANIER ---
function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.options}) - ${item.price.toFixed(2).replace(".", ",")} €`;
    total += item.price;
    cartItems.appendChild(li);
  });

  total += cart.length > 0 ? 1 : 0;
  cartTotal.textContent = cart.length > 0 
    ? `Total (avec 1€ frais) : ${total.toFixed(2).replace(".", ",")} €` 
    : "Votre panier est vide";

  cartCount.textContent = cart.length;
}

// --- OUVRIR / FERMER PANIER ---
cartIcon.addEventListener("click", () => cartPanel.classList.toggle("hidden"));

// --- COMMANDER PAR EMAIL ---
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

