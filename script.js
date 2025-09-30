// --- VARIABLES ---
const productsContainer = document.getElementById("products");
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const orderEmailBtn = document.getElementById("orderEmail");
const cartCount = document.getElementById("cartCount");

let cart = [];

// --- LISTE DES PRODUITS ---
let products = [
  {
    name: "Sondeur",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/sondeur.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["100"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Branche",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Branche.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["85","115"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Moule",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Moule.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","90"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Triface",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Triface.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["80","90","100","110"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Distance",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Distance.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","50","60","70","80","90","100","110","120","130"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Plomb plat",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Plomb PLat.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","90","120","140","200"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grip ailettes",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Grip aillettes.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["55","75","90","110"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grip troué",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Grippe troué.jpg",
    colors: ["Vert cammo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","50","60","90","100","110","120","130","150","170","210","230"],
    quantities: ["1", "2", "3", "4", "5", "10"],
    aspects: ["Lisse", "Ganuleux"]
  },
  // Ajoute tes autres produits ici...
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
  else if (grams === 200) return 1.70;
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

    // Fonction pour créer un select avec label
    const createSelectWithLabel = (labelText, optionsArray, type) => {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.gap = "0.5rem";
      wrapper.style.margin = "0.3rem 0";

      const label = document.createElement("span");
      label.textContent = labelText + ":";

      const sel = document.createElement("select");
      optionsArray.forEach(optText => {
        const opt = document.createElement("option");
        opt.textContent = optText;
        sel.appendChild(opt);
      });

      wrapper.appendChild(label);
      wrapper.appendChild(sel);
      selects.push({ type: type, sel });
      card.appendChild(wrapper);

      return sel;
    }

    if (p.colors.length) createSelectWithLabel("Couleur", p.colors, "Couleur");
    if (p.weights.length) {
      const weightSelect = createSelectWithLabel("Poids", p.weights, "Poids");
      weightSelect.addEventListener("change", () => {
        let finalPrice = getPriceByWeight(weightSelect.value, parseFloat(p.price));
        priceEl.textContent = `Prix : ${finalPrice.toFixed(2).replace(".", ",")} €`;
      });
    }
    if (p.quantities.length) createSelectWithLabel("Nombre", p.quantities, "Nombre");
    if (p.aspects.length) createSelectWithLabel("Aspect", p.aspects, "Aspect");

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
